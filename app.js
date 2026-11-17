function sourceSearchUrl(outlet, query) {
  const parameters = new URLSearchParams({
    q: `site:${outlet} ${query}`,
    hl: "id",
    gl: "ID",
    ceid: "ID:id"
  });
  return `https://news.google.com/search?${parameters}`;
}

const curatedDate = "Dikurasi 30 Sep 2026";
const pressReleaseArticle = {
  id: "pkm-pamulang-tengah-2026",
  category: "Kampus",
  title: "Mahasiswa Ilmu Komunikasi UBSI Edukasi Siswa SDN Pamulang Tengah untuk Cerdas dan Aman Bermedia Sosial Sejak Dini",
  summary: "Edukasi literasi digital untuk 31 siswa kelas 5C membahas privasi, hoaks, dan etika bermedia sosial. Pemahaman siswa meningkat dari 40% menjadi 85%.",
  author: "Tim PKM Ilmu Komunikasi UBSI",
  date: "2026-11-13",
  readTime: "3 menit baca",
  image: "images/pkm-sdn-pamulang-tengah.jpeg",
  alt: "Mahasiswa UBSI berfoto bersama siswa SDN Pamulang Tengah setelah kegiatan edukasi literasi digital",
  body: `UNTUK DISIARKAN SEGERA

TANGERANG SELATAN, 13 November 2026 – Menanggapi tingginya interaksi anak-anak dengan dunia digital, sekelompok mahasiswa Program Studi Ilmu Komunikasi Universitas Bina Sarana Informatika (UBSI) sukses menyelenggarakan kegiatan Pengabdian Kepada Masyarakat (PKM) bertajuk “Membangun Generasi Muda yang Bijak, Aman, dan Bertanggung Jawab dalam Bermedia Sosial”. Kegiatan ini berlangsung interaktif di SDN Pamulang Tengah, Tangerang Selatan, pada Jumat (6/11).

Program edukasi ini diinisiasi oleh kelompok mahasiswa yang dipimpin oleh Balqis Isra’ Fitriyah Sinaga selaku Ketua Pelaksana, bersama Luthfiah Diah Rahmawati, Agisya Anindita Devara, Muhammad Dimasyanto Putra, Uswatun Nisa K.S.R.K, dan Razan Muhammad Ihsan Rahmadi. Kegiatan edukasi digital ini dibimbing langsung oleh Dosen Mata Kuliah Character Building UBSI, Ibu Cindyra Galuhwardani, M.Pd.

Berfokus pada 31 siswa kelas 5C, kegiatan ini dirancang secara khusus untuk menanamkan pondasi literasi digital sejak usia dini. Materi yang disampaikan meliputi pentingnya menjaga privasi dan keamanan data pribadi, panduan mengenali serta menyaring berita bohong (hoaks), dan pemahaman etika guna mencegah perundungan siber (cyberbullying). Edukasi dikemas secara ringan dan menyenangkan melalui metode presentasi interaktif, sesi ice breaking, dan kuis berhadiah yang berhasil memicu antusiasme para siswa.

Berdasarkan hasil pengamatan dan evaluasi tim, program ini membawa dampak positif yang terukur. Tingkat partisipasi dan pemahaman literasi digital siswa melonjak signifikan, dari yang sebelumnya hanya berada di angka 40%, meningkat tajam menjadi 85% setelah sesi edukasi selesai dilaksanakan.

“Melalui kegiatan ini, kami berharap generasi muda, khususnya adik-adik di SDN Pamulang Tengah, tidak hanya sekadar menjadi penikmat teknologi, tetapi tumbuh menjadi pengguna yang cerdas, kritis, dan beretika,” ujar Balqis Isra’ Fitriyah Sinaga, Ketua Pelaksana kegiatan. “Kebiasaan positif dalam bermedia sosial harus ditanamkan sejak dini agar tercipta lingkungan digital yang sehat, aman, dan meminimalisir risiko negatif seperti penipuan maupun kejahatan siber lainnya.”

Pihak SDN Pamulang Tengah, yang diwakili oleh Wali Kelas 5C, Bapak Adi Wijaya, S.Pd., menyambut baik inisiatif ini dan memberikan dukungan secara penuh. Kolaborasi sinergis antara institusi pendidikan tinggi dan sekolah dasar ini diharapkan dapat menjadi langkah awal yang berkelanjutan dalam membentuk karakter bangsa yang berlandaskan nilai-nilai luhur di era digital yang serba cepat ini.

Tentang Tim PKM Ilmu Komunikasi UBSI
Tim PKM ini merupakan kelompok mahasiswa semester berjalan dari Program Studi Ilmu Komunikasi, Fakultas Komunikasi & Bahasa, Universitas Bina Sarana Informatika. Program Pengabdian Kepada Masyarakat ini adalah bentuk nyata implementasi mata kuliah Character Building, yang bertujuan melatih mahasiswa untuk terjun langsung memecahkan permasalahan di masyarakat dan mengabdi melalui edukasi yang bermanfaat.

Kontak Media:
Razan Muhammad Ihsan Rahmadi
Divisi Publikasi & Dokumentasi
Tim PKM Ilmu Komunikasi UBSI
NIM: 44251473`,
  sources: []
};
const fallbackArticles = [
  {
    id: 1,
    category: "Viral",
    title: "Video Dugaan Penganiayaan Tiga Pekerja Rumah Tangga Indonesia di Malaysia Disorot",
    summary: "Laporan media mengangkat video dugaan kekerasan terhadap tiga pekerja migran Indonesia dan respons yang menyusul.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    alt: "Orang-orang berdiskusi dalam sebuah ruangan",
    body: "Sebuah video yang dikaitkan dengan dugaan penganiayaan terhadap tiga pekerja rumah tangga Indonesia di Malaysia menjadi perhatian media dan warganet. Kasus yang melibatkan pekerja migran perlu diikuti melalui keterangan otoritas dan laporan terverifikasi, bukan potongan video yang beredar tanpa konteks.\n\nIdentitas korban, proses pemeriksaan, dan perkembangan hukum harus mengacu pada pemberitaan terbaru. Hindari menyebarkan ulang video atau informasi pribadi yang dapat menambah risiko bagi korban.\n\nArtikel ini merangkum topik yang muncul dalam penelusuran berita pada 30 September 2026; tautan di bawah membuka hasil liputan media untuk konteks dan perkembangan terbaru.",
    sources: [{ label: "Telusuri liputan Kompas.com", url: sourceSearchUrl("kompas.com", "video 3 PRT Indonesia diduga dianiaya Malaysia") }]
  },
  {
    id: 2,
    category: "Viral",
    title: "Kabar Dugaan Asusila di Ruang Kelas Unair Ramai Dibahas",
    summary: "Isu yang menyebut mahasiswa Unair memicu respons kampus dan kembali mengingatkan pentingnya menjaga privasi.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80",
    alt: "Suasana ruang belajar di lingkungan kampus",
    body: "Sebuah isu dugaan tindakan asusila di ruang kelas yang dikaitkan dengan mahasiswa Universitas Airlangga menjadi perbincangan di media sosial. Laporan media menyebut pihak kampus telah memberikan tanggapan. Detail identitas dan materi yang beredar perlu diperlakukan hati-hati karena menyangkut privasi serta proses klarifikasi.\n\nDalam kasus yang belum seluruh faktanya terang, bedakan dugaan dari temuan resmi. Hindari menyebarkan video, nama, atau spekulasi yang dapat merugikan pihak terkait. Ikuti pernyataan kampus dan laporan media yang mencantumkan konteks serta pembaruan.",
    sources: [{ label: "Telusuri liputan CNN Indonesia", url: sourceSearchUrl("cnnindonesia.com", "mahasiswa dugaan asusila ruang kelas Unair buka suara") }]
  },
  {
    id: 3,
    category: "Viral",
    title: "Video Ramalan Gempa M9 Beredar, Publik Diingatkan Cek Informasi BMKG",
    summary: "Konten prediksi bencana kembali menyebar; gempa tidak dapat dipastikan waktunya dengan ramalan media sosial.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=80",
    alt: "Pemandangan alam Indonesia",
    body: "Video yang mengaitkan ramalan gempa berkekuatan besar dengan Indonesia ramai dibagikan. BMKG menjadi rujukan utama untuk informasi gempa, aktivitas seismik, dan peringatan resmi. Sampai saat ini, gempa bumi belum dapat diprediksi secara tepat mengenai waktu, lokasi, dan kekuatannya.\n\nJangan meneruskan pesan yang menyebut tanggal atau jam kejadian tanpa sumber resmi. Untuk kesiapsiagaan, pelajari jalur evakuasi dan ikuti arahan pemerintah daerah serta BMKG, bukan unggahan yang memicu kepanikan.",
    sources: [{ label: "Telusuri penjelasan CNN Indonesia", url: sourceSearchUrl("cnnindonesia.com", "viral video ramalan gempa M9 BMKG") }]
  },
  {
    id: 4,
    category: "Viral",
    title: "Klaim Australia Mengirim Bantuan Tunai ke Indonesia Dinyatakan Keliru",
    summary: "Pemeriksaan fakta terhadap video viral menegaskan pentingnya memeriksa klaim sebelum membagikannya.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
    alt: "Layar digital menampilkan informasi dan data",
    body: "Konten yang mengklaim Australia mengirim bantuan uang tunai kepada Indonesia beredar di media sosial. Pemeriksaan fakta yang dirujuk dalam hasil berita menyebut klaim video tersebut tidak benar. Klaim bantuan lintas negara sebaiknya diperiksa melalui pengumuman pemerintah dan media yang melakukan verifikasi.\n\nPeriksa apakah video berasal dari kejadian lama, apakah narasinya sesuai dengan gambar, dan apakah ada konfirmasi dari lembaga yang disebut. Jangan jadikan banyaknya tayangan sebagai bukti kebenaran sebuah informasi.",
    sources: [{ label: "Telusuri pemeriksaan fakta INP Polri", url: sourceSearchUrl("inp.polri.go.id", "viral video falsely claims Australia cash aid Indonesia") }]
  },
  {
    id: 5,
    category: "Viral",
    title: "No Viral, No Justice: Perdebatan tentang Peran Media Sosial dalam Kasus Hukum",
    summary: "Ungkapan ini memantik diskusi tentang akses keadilan, perhatian publik, dan proses hukum yang seharusnya konsisten.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=80",
    alt: "Buku-buku hukum tersusun di perpustakaan",
    body: "Ungkapan “no viral, no justice” kembali muncul dalam diskusi mengenai cara sebuah perkara mendapat perhatian. Media sosial dapat membuat suatu pengalaman terdengar luas, tetapi popularitas unggahan tidak menggantikan penyelidikan, bukti, pendampingan hukum, atau proses pengadilan.\n\nPerdebatan ini menyentuh dua hal sekaligus: manfaat sorotan publik ketika laporan terasa tidak didengar, dan risiko ketika tekanan warganet mendahului verifikasi. Pelaporan yang bertanggung jawab tetap menghormati asas praduga tak bersalah serta hak semua pihak.",
    sources: [{ label: "Telusuri liputan Kompas.com", url: sourceSearchUrl("kompas.com", "No Viral No Justice potret penegakan hukum Indonesia") }]
  },
  {
    id: 6,
    category: "Viral",
    title: "Surat Tagihan Persib kepada PT LIB Senilai Rp9,4 Miliar Jadi Perbincangan",
    summary: "Dokumen tagihan yang beredar ramai dibahas; konteks, pihak terkait, dan klarifikasi penting dibaca bersama.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80",
    alt: "Lapangan sepak bola saat pertandingan",
    body: "Surat tagihan piutang Persib kepada PT Liga Indonesia Baru dengan nilai yang diberitakan mencapai Rp9,4 miliar menjadi topik ramai. Angka dalam dokumen atau unggahan yang beredar perlu dipahami melalui keterangan klub, operator liga, serta konteks kewajiban yang disebut.\n\nUntuk mengikuti perkembangannya, periksa apakah pihak-pihak terkait telah memberi klarifikasi dan apakah nominal yang beredar merujuk pada tagihan, pembayaran, atau sengketa. Jangan menyimpulkan adanya pelanggaran sebelum ada penjelasan lengkap.",
    sources: [{ label: "Telusuri laporan detikcom", url: sourceSearchUrl("detik.com", "surat tagihan piutang Persib PT LIB Rp9,4 miliar") }]
  },
  {
    id: 7,
    category: "Lifestyle",
    title: "Biaya Hidup Mahasiswa di 20 Kota Kampus Indonesia: Kos, Makan, dan Transportasi",
    summary: "Panduan anggaran tahun ajaran 2026/2027 mengajak calon mahasiswa membandingkan kebutuhan sebelum memilih kota.",
    author: "UBSI Lifestyle",
    date: curatedDate,
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80",
    alt: "Mahasiswa berjalan di lingkungan kampus",
    body: "Biaya kuliah bukan satu-satunya komponen yang perlu dihitung saat memilih kota untuk kuliah. Biaya kos, makan, transportasi, pulsa, dan kebutuhan akademik bisa berbeda jauh antara satu kota dan kota lain. Sebuah rangkuman biaya hidup mahasiswa untuk 20 kota kampus Indonesia 2026/2027 menjadi salah satu topik layanan yang muncul hari ini.\n\nAngka survei atau estimasi sebaiknya dipakai sebagai titik awal, bukan jaminan biaya pribadi. Tanyakan harga kos terkini di area kampus, hitung perjalanan harian, dan siapkan cadangan untuk kebutuhan mendadak. Buat anggaran bulanan yang realistis sebelum memutuskan.",
    sources: [{ label: "Telusuri rangkuman Dataloka.id", url: sourceSearchUrl("dataloka.id", "biaya hidup kuliah 20 kota kampus Indonesia 2026 2027") }]
  },
  {
    id: 8,
    category: "Lifestyle",
    title: "Budaya Ngafe Mahasiswa Cirebon: Tempat Belajar atau Sekadar Nongkrong?",
    summary: "Kedai kopi kini jadi ruang sosial dan belajar, tetapi kebiasaan jajan tetap perlu disesuaikan dengan anggaran.",
    author: "UBSI Lifestyle",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    alt: "Suasana kedai kopi dengan meja untuk belajar",
    body: "Fenomena mahasiswa menghabiskan waktu di kedai kopi Cirebon memperlihatkan bagaimana ruang komersial juga berfungsi sebagai tempat belajar, bertemu, dan mengerjakan tugas. Bagi sebagian orang, suasana di luar rumah membantu fokus; bagi yang lain, pengeluaran kecil yang berulang justru cepat menumpuk.\n\nCoba tetapkan batas belanja mingguan, pilih tempat yang nyaman tanpa harus memesan banyak, dan pastikan jam belajar tetap efektif. Nongkrong bisa jadi bagian dari keseharian tanpa mengorbankan kebutuhan utama.",
    sources: [{ label: "Telusuri laporan TIMES Indonesia", url: sourceSearchUrl("timesindonesia.co.id", "gaya hidup ngafe mahasiswa Cirebon belajar") }]
  },
  {
    id: 9,
    category: "Lifestyle",
    title: "Slow Jogging dari Korea Selatan Ikut Menarik Minat Komunitas di Indonesia",
    summary: "Olahraga berintensitas ringan ini menjadi tren; sesuaikan kecepatan dan durasi dengan kondisi tubuh.",
    author: "UBSI Lifestyle",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80",
    alt: "Seseorang berlari santai di jalur hijau",
    body: "Slow jogging ramai dibicarakan setelah tren dari Korea Selatan mendapat perhatian dan komunitas serupa ditemukan di Indonesia. Bentuk lari santai ini biasanya dilakukan pada kecepatan yang memungkinkan seseorang tetap berbicara, tetapi setiap orang tetap perlu menyesuaikan aktivitas dengan kebugaran dan kondisi kesehatannya.\n\nMulai dengan durasi singkat, gunakan alas kaki yang nyaman, dan pilih rute yang aman. Jika memiliki kondisi medis atau merasa tidak nyaman saat berolahraga, konsultasikan dengan tenaga kesehatan. Tren boleh jadi pemantik, tetapi konsistensi dan keselamatan lebih penting.",
    sources: [{ label: "Telusuri laporan detikHealth", url: sourceSearchUrl("health.detik.com", "slow jogging komunitas di Indonesia") }]
  },
  {
    id: 10,
    category: "Lifestyle",
    title: "KIP Kuliah dan Gaya Hidup Mahasiswa: Memahami Aturan Sebelum Berkomentar",
    summary: "Perbincangan tentang penerima bantuan mengingatkan publik untuk membaca syarat program dan menghindari penghakiman dari unggahan.",
    author: "UBSI Lifestyle",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80",
    alt: "Mahasiswa mengikuti kegiatan belajar di kampus",
    body: "Isu gaya hidup penerima KIP Kuliah beberapa kali menjadi bahan perdebatan di media sosial. Penilaian kelayakan bantuan memiliki aturan dan mekanisme resmi; foto atau potongan cerita di internet tidak cukup untuk menyimpulkan kondisi ekonomi seseorang maupun menentukan apakah ia berhak menerima bantuan.\n\nMahasiswa dan keluarga sebaiknya merujuk informasi program dari kanal pemerintah dan kampus. Masyarakat juga perlu menjaga privasi serta tidak menyebarkan data pribadi penerima. Kritik terhadap kebijakan bisa disampaikan tanpa mempermalukan individu.",
    sources: [{ label: "Telusuri penjelasan Kompas.com", url: sourceSearchUrl("kompas.com", "KIP Kuliah gaya hidup mewah aturan penerima") }]
  },
  {
    id: 11,
    category: "Lifestyle",
    title: "KAI Menawarkan Diskon untuk Mahasiswa dan Alumni Perguruan Tinggi Tertentu",
    summary: "Program potongan harga menarik perhatian pelajar; cek daftar kampus, periode, dan ketentuan sebelum memesan.",
    author: "UBSI Lifestyle",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80",
    alt: "Kereta api melintas di jalur perjalanan",
    body: "Kabar diskon tiket kereta sebesar 10 persen bagi mahasiswa dan alumni dari 41 perguruan tinggi menjadi informasi praktis bagi yang merencanakan perjalanan. Promo semacam ini biasanya memiliki daftar institusi, kanal pembelian, periode, dan kelas layanan yang memenuhi syarat.\n\nSebelum berangkat, cek pengumuman terbaru melalui kanal resmi KAI atau kampus yang bekerja sama. Bandingkan harga akhir, ketentuan identitas, serta jadwal pembelian agar tidak mengandalkan tangkapan layar lama.",
    sources: [{ label: "Telusuri laporan Bloomberg Technoz", url: sourceSearchUrl("bloombergtechnoz.com", "KAI diskon 10 persen mahasiswa alumni 41 perguruan tinggi") }]
  },
  {
    id: 12,
    category: "Lifestyle",
    title: "Hemat Energi Mulai Jadi Kebiasaan Baru di Kalangan Mahasiswa",
    summary: "Kampus dan mahasiswa membahas kebiasaan sederhana untuk mengurangi pemakaian energi tanpa mengganggu kegiatan belajar.",
    author: "UBSI Lifestyle",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
    alt: "Lampu menyala di ruang belajar",
    body: "Krisis energi dan dorongan efisiensi ikut membentuk percakapan tentang kebiasaan sehari-hari di kampus. Mematikan lampu dan pendingin ruangan saat ruangan kosong, memanfaatkan cahaya alami, serta mengatur perangkat agar tidak terus menyala adalah langkah yang bisa dicoba bersama.\n\nPerubahan paling mudah bertahan ketika fasilitas kampus mendukung dan tanggung jawab dibagi. Mahasiswa dapat mengusulkan pengingat kelas, audit sederhana penggunaan listrik, atau kegiatan hemat energi yang terukur.",
    sources: [{ label: "Telusuri berita Universitas Tarumanagara", url: sourceSearchUrl("untar.ac.id", "hemat energi gaya hidup mahasiswa krisis energi") }]
  },
  {
    id: 13,
    category: "Kreator",
    title: "Konten Kreator dan NIB: Apa yang Perlu Dipahami dari Aturan Usaha Terbaru?",
    summary: "Pemberitaan tentang klasifikasi kegiatan usaha kreator ramai; kewajiban tiap orang perlu merujuk penjelasan resmi.",
    author: "UBSI Kreator",
    date: curatedDate,
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
    alt: "Perangkat ponsel untuk membuat konten digital",
    body: "Sejumlah media membahas pencantuman aktivitas kreator konten dalam klasifikasi kegiatan usaha dan kaitannya dengan Nomor Induk Berusaha (NIB). Judul yang menyebut “wajib” tidak selalu berarti setiap orang yang pernah mengunggah konten memiliki kewajiban yang sama; bentuk kegiatan, skala, penghasilan, dan ketentuan resmi dapat berpengaruh.\n\nSebelum mengurus atau menyimpulkan kewajiban pajak dan administrasi, periksa penjelasan Kementerian Ekonomi Kreatif, OSS, serta aturan KBLI yang berlaku. Informasi ini merupakan rangkuman awal, bukan nasihat hukum atau pajak.",
    sources: [{ label: "Telusuri penjelasan Kompas.com", url: sourceSearchUrl("kompas.com", "penjelasan Menteri Ekraf NIB konten kreator") }, { label: "Telusuri laporan RRI", url: sourceSearchUrl("rri.co.id", "konten kreator KBLI 2025 NIB") }]
  },
  {
    id: 14,
    category: "Kreator",
    title: "Kemenkum Mengingatkan Kreator tentang Risiko Copyright Trolling",
    summary: "Penggunaan karya tanpa izin dapat memicu sengketa; memahami lisensi dan menyimpan bukti izin sejak awal membantu.",
    author: "UBSI Kreator",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    alt: "Seseorang menulis dan menyusun karya kreatif",
    body: "Peringatan mengenai copyright trolling mengangkat risiko klaim hak cipta yang dapat dihadapi kreator digital. Bagi pembuat konten, aturan praktisnya tetap sama: jangan menganggap gambar, musik, cuplikan video, atau font yang ditemukan di internet bebas digunakan.\n\nGunakan materi berlisensi sesuai kebutuhan, baca batas penggunaan, catat sumber, dan simpan bukti izin atau pembelian. Bila menerima klaim, periksa detailnya dan minta bantuan profesional sebelum membayar atau mengajukan sanggahan.",
    sources: [{ label: "Telusuri laporan TIMES Indonesia", url: sourceSearchUrl("timesindonesia.co.id", "Kemenkum kreator konten copyright trolling") }]
  },
  {
    id: 15,
    category: "Kreator",
    title: "Indosat dan Adobe Mengumumkan Kolaborasi untuk Mendukung Kreator Indonesia",
    summary: "Program pelatihan dan perangkat kreatif menjadi fokus pemberitaan tentang pengembangan talenta konten lokal.",
    author: "UBSI Kreator",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=80",
    alt: "Peralatan kamera dan produksi konten",
    body: "Kolaborasi Indosat, Adobe, dan mitra pemerintah untuk mendukung kreator konten menjadi salah satu kabar industri kreatif yang banyak diberitakan. Program semacam ini dapat membuka akses pelatihan dan perangkat, tetapi hasil akhirnya bergantung pada keberlanjutan pendampingan serta peluang distribusi karya.\n\nBagi mahasiswa yang tertarik, cek pengumuman resmi penyelenggara untuk jadwal, syarat peserta, biaya, dan hak atas karya. Hindari mendaftar melalui tautan tidak resmi yang meminta data sensitif atau pembayaran di luar ketentuan.",
    sources: [{ label: "Telusuri laporan detikInet", url: sourceSearchUrl("inet.detik.com", "Indosat Adobe kreator konten Indonesia") }]
  },
  {
    id: 16,
    category: "Kreator",
    title: "Kreator Konten di Kawasan Gunung Berapi Diingatkan Mengutamakan Keselamatan",
    summary: "Mengejar gambar dramatis tidak sebanding dengan risiko; patuhi radius aman dan arahan petugas.",
    author: "UBSI Kreator",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=80",
    alt: "Pemandangan gunung berapi dari kejauhan",
    body: "Peringatan bagi kreator konten dan wisatawan di kawasan gunung berapi menjadi pengingat bahwa pencarian gambar eksklusif bisa membawa risiko serius. Kondisi gunung dapat berubah, dan batas aman ditentukan otoritas berdasarkan pengamatan serta rekomendasi petugas.\n\nJangan melewati pembatas, memasuki area terlarang, atau menunda evakuasi demi merekam. Cek informasi PVMBG dan pemerintah daerah sebelum perjalanan, lalu bagikan konten yang tidak mendorong orang lain meniru tindakan berbahaya.",
    sources: [{ label: "Telusuri laporan BBC", url: sourceSearchUrl("bbc.com", "volcano content creators tourists warned Indonesia") }]
  },
  {
    id: 17,
    category: "Kreator",
    title: "Tren Konten 2026: Kreator Perlu Mengutamakan Cerita dan Kepercayaan Audiens",
    summary: "Di tengah banjir unggahan, konsistensi, konteks, dan keaslian dapat menjadi pembeda dari sekadar mengejar viral.",
    author: "UBSI Kreator",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=80",
    alt: "Kamera untuk merekam video kreatif",
    body: "Perkembangan platform membuat format populer berubah cepat. Salah satu laporan tren konten 2026 membahas cara kreator beradaptasi dengan perubahan perilaku penonton. Meski tren memberi ide, menyalin format tanpa memahami audiens dapat membuat karya terasa seragam.\n\nBangun kalender konten yang realistis, uji satu gagasan pada satu waktu, dan nilai respons audiens dari lebih dari sekadar jumlah tayangan. Jelaskan kerja sama berbayar, cek fakta sebelum mengangkat isu, dan berikan ruang bagi koreksi ketika ada kesalahan.",
    sources: [{ label: "Telusuri laporan detikcom", url: sourceSearchUrl("detik.com", "10 tren konten media sosial tahun 2026 kreator") }]
  },
  {
    id: 18,
    category: "Kreator",
    title: "Kreator dan Aktivis Melaporkan Teror, Ruang Aman Berekspresi Jadi Sorotan",
    summary: "Laporan tentang intimidasi terhadap pengkritik penanganan bencana memicu diskusi soal keamanan dan kebebasan berpendapat.",
    author: "UBSI Kreator",
    date: curatedDate,
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80",
    alt: "Jurnalis bekerja di ruang redaksi",
    body: "Pemberitaan mengenai kreator konten dan aktivis yang melaporkan teror setelah mengkritik penanganan bencana menyorot risiko yang dihadapi orang ketika berbicara di ruang publik. Pemerintah membantah dugaan pembatasan kritik menurut laporan yang terindeks. Perkembangan kasus dan respons para pihak perlu terus dipantau melalui liputan lengkap.\n\nUntuk kreator, langkah keselamatan digital seperti mengaktifkan autentikasi dua faktor, menyimpan bukti ancaman, dan meminta pendampingan dapat membantu. Kritik yang berbasis data dan disampaikan bertanggung jawab tetap penting bagi diskusi publik.",
    sources: [{ label: "Telusuri laporan BBC", url: sourceSearchUrl("bbc.com", "aktivis konten kreator diteror kritik penanganan bencana") }]
  },
  {
    id: 19,
    category: "Tips",
    title: "Mau Mengajukan KIP Kuliah 2026? Cek Jadwal, Syarat, dan Kanal Resmi",
    summary: "Informasi program dapat berubah; calon mahasiswa sebaiknya memeriksa pengumuman resmi sebelum mengirim data.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    alt: "Catatan dan dokumen untuk persiapan kuliah",
    body: "Calon mahasiswa yang ingin mendaftar KIP Kuliah perlu memeriksa jadwal pendaftaran, ketentuan ekonomi, dokumen, dan kampus yang menerima bantuan. Informasi untuk tahun 2026 tersedia dalam liputan terbaru, tetapi tanggal dan prosedur dapat berubah sewaktu-waktu.\n\nGunakan portal resmi KIP Kuliah dan konfirmasi kepada bagian admisi kampus. Jangan membayar pihak yang menjanjikan kelulusan, jangan menyerahkan kata sandi akun, dan simpan salinan dokumen yang dikirim. Artikel ini merupakan panduan awal; keputusan dan syarat akhir mengikuti kanal pemerintah.",
    sources: [{ label: "Telusuri panduan Bloomberg Technoz", url: sourceSearchUrl("bloombergtechnoz.com", "KIP Kuliah 2026 jadwal cara daftar syarat fasilitas") }]
  },
  {
    id: 20,
    category: "Tips",
    title: "Atur Keuangan Bulanan dengan Membagi Kebutuhan, Tabungan, dan Hiburan",
    summary: "Mulai dari catatan pengeluaran sederhana agar uang kos dan kebutuhan kuliah tidak tercampur.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    alt: "Seseorang mencatat anggaran bulanan",
    body: "Mengelola uang saku tidak harus dimulai dengan aplikasi rumit. Catat pemasukan, sisihkan biaya tetap seperti kos dan transportasi, lalu tentukan batas belanja harian. Tinjau catatan setiap minggu supaya pengeluaran kecil yang berulang tidak luput.\n\nSimpan dana darurat secara bertahap sesuai kemampuan dan hindari pinjaman untuk memenuhi gaya hidup. Jika menggunakan layanan keuangan digital, pahami biaya, bunga, dan jadwal pembayaran sebelum menyetujui. Tips umum ini bukan rekomendasi investasi atau produk keuangan tertentu.",
    sources: [{ label: "Telusuri tips ANTARA News", url: sourceSearchUrl("antaranews.com", "tips mengatur finansial sehat anak muda") }]
  },
  {
    id: 21,
    category: "Tips",
    title: "Cara Daftar BPJS Kesehatan Online: Siapkan Data dan Periksa Kanal Resmi",
    summary: "Panduan layanan publik terbaru menyorot pendaftaran digital; hindari situs tiruan yang meminta informasi sensitif.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    alt: "Petugas kesehatan menggunakan perangkat digital",
    body: "Pendaftaran BPJS Kesehatan secara online dapat menghemat waktu, tetapi calon peserta tetap perlu menyiapkan data yang sesuai dan membaca persyaratan terkini. Pemberitaan terbaru merangkum cara mendaftar; prosedur dapat berubah mengikuti layanan yang tersedia.\n\nMulai dari aplikasi atau situs resmi BPJS Kesehatan, periksa alamat sebelum memasukkan NIK, nomor telepon, dan data keluarga, serta jangan membagikan kode OTP. Jika menemukan perbedaan antara panduan media dan portal resmi, ikuti instruksi BPJS atau hubungi layanan resminya.",
    sources: [{ label: "Telusuri panduan Bloomberg Technoz", url: sourceSearchUrl("bloombergtechnoz.com", "cara mudah daftar BPJS Kesehatan online") }, { label: "Telusuri panduan Tempo.co", url: sourceSearchUrl("tempo.co", "cara daftar BPJS Kesehatan online syarat") }]
  },
  {
    id: 22,
    category: "Tips",
    title: "Data Pribadi Bocor? Ini Langkah Awal untuk Mengurangi Risiko Penyalahgunaan",
    summary: "Ganti kredensial yang terdampak, amankan akun, dan waspadai pesan yang meminta OTP atau transfer.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
    alt: "Gembok digital pada layar komputer",
    body: "Kebocoran data dapat meningkatkan risiko pembobolan rekening, penipuan, dan pemerasan. Jika menduga data pribadi tersebar, ganti kata sandi akun yang terdampak dan akun lain yang memakai sandi sama. Aktifkan autentikasi dua faktor dan hubungi bank atau penyedia layanan melalui kanal resmi bila ada transaksi mencurigakan.\n\nJangan memberikan OTP, PIN, atau akses jarak jauh kepada penelepon yang mengaku petugas. Simpan bukti komunikasi, laporkan penyalahgunaan kepada platform dan pihak berwenang, serta minta bantuan orang tepercaya. Langkah spesifik bergantung pada jenis data yang bocor.",
    sources: [{ label: "Telusuri analisis The Conversation", url: sourceSearchUrl("theconversation.com", "risiko kebocoran data pribadi cara mengantisipasinya Indonesia") }]
  },
  {
    id: 23,
    category: "Tips",
    title: "Cek SLIK OJK Sebelum Mengajukan Kredit, Jangan Percaya Jasa Hapus Data",
    summary: "Riwayat kredit dapat diperiksa melalui layanan resmi OJK; hindari pihak yang menjamin penghapusan dengan bayaran.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80",
    alt: "Dokumen keuangan dan kalkulator di meja kerja",
    body: "SLIK OJK memuat informasi debitur yang digunakan lembaga jasa keuangan dalam proses penilaian kredit. Masyarakat dapat mencari petunjuk pemeriksaan melalui layanan resmi OJK dan menyiapkan identitas sesuai persyaratan. Pastikan alamat situs serta prosedur masih berlaku saat mengajukan permintaan.\n\nWaspadai jasa yang menjanjikan penghapusan catatan kredit dengan biaya, meminta kata sandi, atau meminta OTP. Bila menemukan informasi yang tidak sesuai, ajukan klarifikasi melalui kanal resmi lembaga pelapor dan OJK, bukan melalui perantara tidak dikenal.",
    sources: [{ label: "Telusuri panduan SLIK OJK di Cermati", url: sourceSearchUrl("cermati.com", "SLIK OJK cara cek offline online") }]
  },
  {
    id: 24,
    category: "Tips",
    title: "Sebelum Ikut Tren Viral, Lakukan Cek Sumber, Tanggal, dan Konteks",
    summary: "Tiga pemeriksaan sederhana membantu menahan hoaks dan melindungi orang yang namanya ikut terseret.",
    author: "Redaksi UBSI Kini",
    date: curatedDate,
    readTime: "3 menit baca",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    alt: "Seseorang memeriksa informasi melalui ponsel",
    body: "Ketika sebuah unggahan ramai, berhenti sejenak sebelum membagikannya. Cari sumber asli, lihat kapan konten dibuat, dan baca apakah judul sesuai dengan isi. Untuk isu bencana, kesehatan, atau hukum, bandingkan dengan keterangan instansi terkait dan beberapa media tepercaya.\n\nJangan mengunggah ulang identitas, rekaman pribadi, atau tuduhan yang belum terverifikasi. Jika tidak menemukan sumber yang dapat dipercaya, lebih baik tidak meneruskan kabar tersebut. Kebiasaan sederhana ini membantu menjaga percakapan kampus tetap informatif dan menghormati orang lain.",
    sources: [{ label: "Telusuri pemeriksaan fakta INP Polri", url: sourceSearchUrl("inp.polri.go.id", "fact check viral video Indonesia hoax") }]
  }
];

const allowedFallbackSource = /site:(?:kompas\.com|tempo\.co)(?:\s|$)/i;
let articles = [pressReleaseArticle, ...fallbackArticles.filter((article) => article.sources?.length && article.sources.every((source) => {
  try {
    return allowedFallbackSource.test(new URL(source.url).searchParams.get("q") || "");
  } catch {
    return false;
  }
}))];
const grid = document.querySelector("#news-grid");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const dialog = document.querySelector("#article-dialog");
const feedStatus = document.querySelector("#feed-status");
let selectedCategory = "Semua";
let activeArticle = null;
let leadArticle = articles[0];
let refreshTimer;
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" })
  : null;

document.querySelector("#today").textContent = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(new Date());

function renderArticles() {
  const query = searchInput.value.trim().toLocaleLowerCase("id-ID");
  const matchingArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    const searchableText = `${article.title} ${article.summary} ${article.category} ${article.author}`.toLocaleLowerCase("id-ID");
    return matchesCategory && searchableText.includes(query);
  });

  grid.innerHTML = matchingArticles.map((article, index) => {
    const articleKey = escapeHTML(article.id);
    const imageUrl = articleImageUrl(article) || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80";
    return `
    <article class="news-card" style="--reveal-delay:${Math.min(index, 4) * 65}ms">
      <button class="card-image-button" data-open-article="${articleKey}" aria-label="Baca: ${escapeHTML(article.title)}">
        <img src="${escapeHTML(imageUrl)}" alt="${escapeHTML(article.alt || article.title)}" loading="lazy" />
        <span class="card-category">${escapeHTML(article.category.toUpperCase())}</span>
      </button>
      <div class="card-meta"><span>${escapeHTML(formatArticleDate(article.date))}</span><span class="meta-dot"></span><span>${escapeHTML(article.readTime)}</span></div>
      <button class="card-title" data-open-article="${articleKey}">${escapeHTML(article.title)}</button>
      <p class="card-summary">${escapeHTML(article.summary)}</p>
    </article>
  `;
  }).join("");

  grid.querySelectorAll(".news-card").forEach((card) => {
    if (revealObserver) revealObserver.observe(card);
    else card.classList.add("is-visible");
  });

  emptyState.hidden = matchingArticles.length > 0;
  resultCount.textContent = `${matchingArticles.length} berita`;
}

function openArticle(article) {
  activeArticle = article;
  document.querySelector("#dialog-image").src = articleImageUrl(article) || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80";
  document.querySelector("#dialog-image").alt = article.alt || article.title;
  document.querySelector("#dialog-category").textContent = article.category.toUpperCase();
  document.querySelector("#dialog-title").textContent = article.title;
  document.querySelector("#dialog-byline").textContent = `${article.author} · ${formatArticleDate(article.date)} · ${article.readTime}`;
  document.querySelector("#dialog-body").textContent = article.body;
  document.querySelector("#dialog-sources").innerHTML = (article.sources || []).map((source) =>
    `<a href="${escapeHTML(safeUrl(source.url) || "#")}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} <span aria-hidden="true">↗</span></a>`
  ).join("");
  document.querySelector("#dialog-sources").hidden = !article.sources?.length;
  dialog.showModal();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function articleImageUrl(article) {
  if (article.id === pressReleaseArticle.id) return pressReleaseArticle.image;
  return safeUrl(article.image);
}

function formatArticleDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const options = { day: "numeric", month: "short" };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value))) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }
  return new Intl.DateTimeFormat("id-ID", options).format(date);
}

function updateLeadStory(article) {
  if (!article) return;
  leadArticle = article;
  const image = document.querySelector("#lead-image");
  image.src = articleImageUrl(article) || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85";
  image.alt = article.alt || article.title;
  document.querySelector(".image-caption").textContent = article.author.toUpperCase();
  document.querySelector("#lead-category").textContent = article.category.toUpperCase();
  document.querySelector("#lead-title").textContent = article.title;
  document.querySelector("#lead-summary").textContent = article.summary;
  document.querySelector("#lead-author").textContent = article.author;
  document.querySelector("#lead-meta").textContent = `${formatArticleDate(article.date)} · ${article.readTime}`;
  document.querySelector("#lead-story").setAttribute("aria-label", `Baca berita: ${article.title}`);
}

function updateLiveChrome(data) {
  const updated = new Date(data.updatedAt);
  const time = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" }).format(updated);
  feedStatus.textContent = data.stale
    ? `Sumber sedang tidak terjangkau · menampilkan cache terakhir (${time})`
    : `LIVE · ${data.articles.length} berita dari ${new Set(data.articles.map((article) => article.author)).size} sumber · diperbarui ${time}`;
  feedStatus.classList.toggle("is-stale", Boolean(data.stale));

  const ticker = document.querySelector(".ticker-track");
  const tickerItems = data.articles.slice(0, 3);
  ticker.replaceChildren(...tickerItems.flatMap((article, index) => {
    const title = document.createElement("span");
    title.textContent = article.title;
    if (index === 0) return [title];
    const separator = document.createElement("span");
    separator.textContent = "•";
    return [separator, title];
  }));

  document.querySelector("#live-total").textContent = String(data.articles.length);
  document.querySelector("#live-categories").textContent = String(new Set(data.articles.map((article) => article.category)).size);
  document.querySelector("#live-updated").textContent = time;
}

async function loadLatestNews() {
  try {
    const response = await fetch("/api/news", { cache: "no-store" });
    if (!response.ok) throw new Error(`Server berita merespons ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data.articles) || data.articles.length === 0) throw new Error("Feed belum berisi berita.");
    articles = [pressReleaseArticle, ...data.articles];
    updateLiveChrome(data);
    updateLeadStory(articles[0]);
    renderArticles();
  } catch (error) {
    feedStatus.textContent = "Feed live belum tersambung · berita cadangan ditampilkan";
    feedStatus.classList.add("is-stale");
    console.warn("Menggunakan berita cadangan:", error.message);
  }
}

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedCategory = chip.dataset.category;
    document.querySelectorAll(".filter-chip").forEach((item) => {
      const selected = item === chip;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderArticles();
  });
});

searchInput.addEventListener("input", renderArticles);
grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-article]");
  if (!trigger) return;
  const article = articles.find((item) => String(item.id) === trigger.dataset.openArticle);
  if (article) openArticle(article);
});

document.querySelector("#lead-story").addEventListener("click", () => openArticle(leadArticle));
document.querySelector("#lead-story").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.querySelector("#lead-story").click();
  }
});
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#share-button").addEventListener("click", async () => {
  const shareData = { title: activeArticle.title, text: activeArticle.summary, url: window.location.href };
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.url}`);
      document.querySelector("#share-button").innerHTML = "<span aria-hidden=\"true\">✓</span> Tautan disalin";
    }
  } catch (error) {
    if (error.name !== "AbortError") console.error("Berita tidak dapat dibagikan.", error);
  }
});

document.querySelector("#menu-toggle").addEventListener("click", (event) => {
  const menu = document.querySelector(".main-nav");
  const isOpen = menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.toggle("active", item === link));
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderArticles();
loadLatestNews();
refreshTimer = window.setInterval(() => {
  if (document.visibilityState === "visible") loadLatestNews();
}, 5 * 60 * 1000);