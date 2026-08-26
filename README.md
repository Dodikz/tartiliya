# Tartiliya - Modern Islamic Web Platform

**Tartiliya** adalah platform web islami modern, cepat, dan terpercaya yang dirancang untuk memudahkan umat Islam dalam membaca Al-Qur'an digital, memantau jadwal shalat harian resmi Kemenag RI, menelaah ensiklopedia Islam (Niat, Doa, dan Hadis), serta memeriksa kalender Hijriah dan kalkulator arah kiblat secara presisi.

---

## Fitur Utama

### 1. Al-Qur'an Digital 114 Surah
- Daftar lengkap 114 Surah beserta klasifikasi Makkiyah & Madaniyah.
- Teks Arab Utsmani berstandar dengan terjemahan resmi Bahasa Indonesia.
- Audio murottal pelafalan per ayat berkualitas jernih.
- Tafsir ringkas & komprehensif dari Kementerian Agama Republik Indonesia (Kemenag RI).
- Riwayat "Terakhir Dibaca" otomatis tersimpan di masing-masing browser pengguna.
- Fitur pencarian cepat (*Quick Search modal*) dengan pintasan keyboard `Ctrl+K`.

### 2. Jadwal Shalat & Notifikasi Adzan
- Jadwal waktu shalat resmi berbasis data Kementerian Agama RI untuk 514+ Kabupaten/Kota di seluruh Indonesia.
- Deteksi otomatis lokasi pengguna berbasis GPS/Geolokasi peramban.
- Hitung mundur (*live countdown*) menuju waktu shalat berikutnya.
- Notifikasi adzan otomatis ketika waktu shalat tiba (dilengkapi audio adzan resmi, termasuk lantunan khusus Adzan Subuh).

### 3. Ensiklopedia Islam Terpadu (Niat, Doa & Hadis)
- **Katalog Niat Ibadah**: Panduan niat shalat wajib, shalat sunnah, puasa wajib/sunnah, thaharah (wudhu/mandi wajib/tayamum), dan zakat/sedekah lengkap dengan teks Arab, latin, terjemahan, dan keterangan praktis.
- **Kumpulan 228+ Doa Harian Shahih**: Doa sehari-hari terlengkap dengan teks Arab, transliterasi, arti, takhrij sumber riwayat, dan tombol salin cepat (*copy to clipboard*).
- **Hadis Tematik & Hikmah**: Hadis-hadis nabi pilihan berdasarkan topik utama (Iman, Shalat, Puasa, Sedekah, Ilmu, Akhlak) disertai faedah dan pelajaran hidup.
- **Ensiklopedia Kitab Hadis Perawi**: Eksplorasi ribuan hadis berdasarkan kitab induk perawi hadis shahih secara interaktif.
- **Pencarian Global Realtime**: Filter dan cari teks Arab, latin, nama doa, atau arti secara instan.

### 4. Kalender Hijriah & Kompas Kiblat Ka'bah
- **Konversi Penanggalan Hijriah**: Konversi tanggal Masehi ke Hijriah menggunakan metode standar Ummul Qura / Kemenag RI dengan kalender interaktif bulanan.
- **Pengingat Agenda Hari Ini (*Daily Islamic Agenda Notification*)**: Deteksi otomatis amalan sunnah harian (seperti Puasa Sunnah Senin & Kamis, Ayyamul Bidh pertengahan bulan, Awal Bulan Hijriah, dan Hari Besar Islam) yang dilengkapi tombol aktivasi notifikasi peramban.
- **Kompas Kiblat GPS Realtime**: Kalkulator derajat arah kiblat akurat dengan visualisasi jarum kompas Ka'bah dan penghitung jarak kilometer ke Mekkah Al-Mukarramah.

### 5. Pengalaman Pengguna (UI/UX) Unggul
- **Light Mode Default & Dark Mode**: Tampilan default mode terang yang bersih, segar, dan nyaman di mata, dengan opsi mode gelap ramah malam.
- **Skeleton Shimmer Loading**: Transisi pemuatan aset ikon dan konten yang mulus tanpa kedipan teks ligatur (*Zero FOUT*).
- **Custom Toast Notification**: Pengganti dialog alert peramban standar yang elegan dan terintegrasi di pojok bawah layar.
- **Desain Responsif**: Optimal untuk layar ponsel pintar, tablet, maupun layar desktop resolusi tinggi.

---

## Sumber Data, API & Audio

Tartiliya mengintegrasikan data, API, dan aset audio dari sumber-sumber resmi dan terpercaya:

1. **[MyQuran API v3](https://api.myquran.com/)** – Penyedia API utama untuk jadwal shalat Kemenag RI, Ensiklopedia Hadis, dan Konversi Kalender Hijriah.
2. **[Kementerian Agama RI (Bimas Islam)](https://bimasislam.kemenag.go.id/)** – Data standardisasi jadwal waktu shalat nasional serta referensi tafsir Al-Qur'an resmi Indonesia.
3. **[AlQuran Cloud API](https://api.alquran.cloud/)** – API penyedia data mushaf teks Arab Utsmani dan audio ayat per ayat.
4. **[Nominatim OpenStreetMap](https://nominatim.openstreetmap.org/)** – Layanan reverse-geocoding untuk deteksi otomatis nama kota/kabupaten berdasarkan koordinat GPS pengguna.
5. **[Suara Adzan Reguler (YouTube)](https://www.youtube.com/watch?v=EqlVF7-1JKQ)** – Sumber audio lantunan adzan waktu shalat reguler (Dzuhur, Ashar, Maghrib, Isya).
6. **[Suara Adzan Subuh (YouTube)](https://www.youtube.com/watch?v=KN1mvdBnB-M)** – Sumber audio lantunan adzan khusus waktu Subuh (*Ash-shalatu khairum minan naum*).

---

## Teknologi yang Digunakan

- **Framework**: [Astro](https://astro.build/) (Static Site Generation & Island Architecture)
- **Bahasa**: TypeScript & Modern JavaScript (ES Modules)
- **Styling**: Tailwind CSS & Modern CSS
- **Font & Icon**: Google Fonts (Inter, Amiri, Scheherazade New) & Google Material Symbols Rounded

---

## Catatan Rilis & Versi Mobile

> **Informasi Aplikasi Mobile:**
> Saat ini Tartiliya tersedia dalam format Web Application yang responsif di semua perangkat (Desktop, Tablet, dan Smartphone). **Aplikasi versi Mobile Native (Android & iOS) saat ini sedang dalam tahap pengembangan dan akan segera menyusul.**

---

## Menjalankan Proyek Secara Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/Dodikz/tartiliya.git
   cd tartiliya
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:4321`.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

---

## Lisensi & Kontribusi

Proyek ini dibangun untuk tujuan kemaslahatan umat. Kontribusi saran, perbaikan data, maupun kode terbuka melalui *Pull Request* dan *Issues* di repositori resmi [GitHub Tartiliya](https://github.com/Dodikz/tartiliya.git).
