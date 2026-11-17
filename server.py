from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from html.parser import HTMLParser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Lock
from urllib.error import URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen
import json
import os
import re
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8765"))
CACHE_SECONDS = 180
MAX_AGE = timedelta(days=10)
FEEDS = [
    {"name": "Tempo.co", "url": "https://rss.tempo.co/"},
    {"name": "Tempo.co", "url": "https://rss.tempo.co/nasional"},
]

VIRAL_TERMS = ("viral", "ramai dibahas", "heboh", "jadi sorotan", "disorot", "warganet", "netizen", "trending")
CREATOR_TERMS = ("kreator", "creator", "influencer", "content creator", "youtuber", "streamer", "konten kreator")
TIP_TERMS = ("cara ", "tips", "panduan", "syarat", "cek ", "ini faktanya", "apa itu", "bagaimana", "mengatasi", "mencegah")
LIFESTYLE_TERMS = ("gaya hidup", "kampus", "mahasiswa", "hiburan", "kuliner", "musik", "film", "drama", "fashion", "skincare", "kesehatan", "wisata", "zodiak", "artis")


class PlainTextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)


class KompasArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.articles = []
        self.article = None
        self.article_depth = 0
        self.anchor_text = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "article" and self.article is None and "articleItem" in attributes.get("class", "").split():
            self.article = {"url": "", "title": "", "image": ""}
            self.article_depth = 1
            return
        if self.article is None:
            return
        if tag == "article":
            self.article_depth += 1
        elif tag == "a" and not self.article["url"]:
            href = attributes.get("href", "")
            parsed_url = urlparse(href)
            hostname = (parsed_url.hostname or "").lower()
            if parsed_url.scheme == "https" and (hostname == "kompas.com" or hostname.endswith(".kompas.com")):
                self.article["url"] = href
                self.anchor_text = []
        elif tag == "img":
            self.article["image"] = attributes.get("src") or attributes.get("data-src") or ""
            self.article["title"] = attributes.get("alt", "").strip()

    def handle_endtag(self, tag):
        if tag == "a":
            if self.anchor_text is not None and not self.article["title"]:
                self.article["title"] = " ".join(" ".join(self.anchor_text).split())
            self.anchor_text = None
        elif tag == "article" and self.article is not None:
            self.article_depth -= 1
            if self.article_depth == 0:
                self.articles.append(self.article)
                self.article = None

    def handle_data(self, data):
        if self.anchor_text is not None:
            self.anchor_text.append(data)


def plain_text(value):
    parser = PlainTextParser()
    parser.feed(unescape(value or ""))
    return re.sub(r"\s+", " ", " ".join(parser.parts)).strip()


def child_text(element, name):
    for child in element:
        if child.tag.rsplit("}", 1)[-1] == name:
            return " ".join(child.itertext()).strip()
    return ""


def item_image(element):
    for child in element.iter():
        local_name = child.tag.rsplit("}", 1)[-1]
        if local_name in ("content", "thumbnail", "enclosure", "img"):
            image_url = child.attrib.get("url") or child.attrib.get("src") or (child.text or "").strip()
            if urlparse(image_url).scheme == "https":
                return image_url
    return ""


def category_for(title, summary, default_category=None):
    text = f"{title} {summary}".casefold()
    if any(term in text for term in CREATOR_TERMS):
        return "Kreator"
    if any(term in text for term in TIP_TERMS):
        return "Tips"
    if any(term in text for term in VIRAL_TERMS):
        return "Viral"
    if default_category:
        return default_category
    if any(term in text for term in LIFESTYLE_TERMS):
        return "Lifestyle"
    return "Berita"


def fetch_feed(feed):
    request = Request(
        feed["url"],
        headers={"User-Agent": "UBSI-Kini-NewsReader/1.0", "Accept": "application/rss+xml, application/xml, text/xml"},
    )
    with urlopen(request, timeout=12) as response:
        root = ET.fromstring(response.read())

    results = []
    for item in root.findall("./channel/item"):
        title = plain_text(child_text(item, "title"))
        link = child_text(item, "link") or child_text(item, "guid")
        hostname = (urlparse(link).hostname or "").lower()
        if (
            not title
            or urlparse(link).scheme != "https"
            or not (hostname == "tempo.co" or hostname.endswith(".tempo.co"))
            or hostname == "en.tempo.co"
        ):
            continue

        summary = plain_text(child_text(item, "description"))
        category = category_for(title, summary, feed.get("category"))
        if not category:
            continue

        published_at = child_text(item, "pubDate")
        try:
            published = parsedate_to_datetime(published_at)
            if published.tzinfo is None:
                published = published.replace(tzinfo=timezone.utc)
        except (TypeError, ValueError, OverflowError):
            continue
        if datetime.now(timezone.utc) - published.astimezone(timezone.utc) > MAX_AGE:
            continue

        results.append({
            "id": link,
            "category": category,
            "title": title,
            "summary": summary[:260],
            "author": feed["name"],
            "date": published.isoformat(),
            "readTime": "Berita sumber",
            "image": item_image(item),
            "alt": title,
            "body": f"{summary}\n\nCuplikan dari {feed['name']}. Buka tautan sumber untuk membaca laporan lengkap dan pembaruan terbaru.",
            "sources": [{"label": f"Baca selengkapnya di {feed['name']}", "url": link}],
        })
    return results


def fetch_kompas():
    request = Request(
        "https://www.kompas.com/",
        headers={"User-Agent": "Mozilla/5.0 (compatible; UBSI-Kini-NewsReader/1.0)", "Accept": "text/html"},
    )
    with urlopen(request, timeout=12) as response:
        parser = KompasArticleParser()
        parser.feed(response.read().decode("utf-8", "replace"))

    results = []
    for item in parser.articles:
        timestamp = re.search(r"/read/(20\d{2})/(\d{2})/(\d{2})/(\d{6})\d*", item["url"])
        if not timestamp or not item["title"]:
            continue
        try:
            published = datetime.strptime("".join(timestamp.groups()), "%Y%m%d%H%M%S")
        except ValueError:
            continue
        published = published.replace(tzinfo=timezone(timedelta(hours=7)))
        if datetime.now(timezone.utc) - published.astimezone(timezone.utc) > MAX_AGE:
            continue

        summary = "Liputan terbaru dari Kompas.com. Buka sumber untuk membaca laporan lengkap."
        results.append({
            "id": item["url"],
            "category": category_for(item["title"], summary),
            "title": item["title"],
            "summary": summary,
            "author": "Kompas.com",
            "date": published.isoformat(),
            "readTime": "Berita sumber",
            "image": item["image"],
            "alt": item["title"],
            "body": f"{summary}\n\nCuplikan dari Kompas.com. Buka tautan sumber untuk membaca laporan lengkap dan pembaruan terbaru.",
            "sources": [{"label": "Baca selengkapnya di Kompas.com", "url": item["url"]}],
        })
    return results


cache = {"fetched_at": None, "payload": None}
cache_lock = Lock()


def get_news():
    with cache_lock:
        now = datetime.now(timezone.utc)
        if cache["payload"] and cache["fetched_at"] and (now - cache["fetched_at"]).total_seconds() < CACHE_SECONDS:
            return cache["payload"]

        articles = []
        warnings = []
        with ThreadPoolExecutor(max_workers=len(FEEDS) + 1) as executor:
            futures = [(feed["name"], executor.submit(fetch_feed, feed)) for feed in FEEDS]
            futures.append(("Kompas.com", executor.submit(fetch_kompas)))
            for source_name, future in futures:
                try:
                    articles.extend(future.result())
                except (URLError, ET.ParseError, TimeoutError, OSError, ValueError) as error:
                    warnings.append(f"{source_name}: {error}")

        unique = {article["id"]: article for article in articles}
        sorted_articles = sorted(unique.values(), key=lambda article: article["date"], reverse=True)
        if not sorted_articles and warnings:
            if cache["payload"]:
                return {**cache["payload"], "stale": True, "warnings": warnings}
            raise RuntimeError("Semua sumber berita sedang tidak dapat diakses.")

        payload = {
            "articles": sorted_articles[:120],
            "updatedAt": now.isoformat(),
            "refreshSeconds": CACHE_SECONDS,
            "warnings": warnings,
            "stale": False,
        }
        cache["fetched_at"] = now
        cache["payload"] = payload
        return payload


class NewsHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        if self.path.split("?", 1)[0] == "/api/news":
            try:
                data = json.dumps(get_news(), ensure_ascii=False).encode("utf-8")
                self.send_response(200)
            except RuntimeError as error:
                data = json.dumps({"error": str(error)}, ensure_ascii=False).encode("utf-8")
                self.send_response(502)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), NewsHandler)
    print(f"UBSI Kini berjalan di http://127.0.0.1:{PORT}")
    server.serve_forever()