# Tartiliya - Modern Islamic Web Portal

**Tartiliya** adalah platform web islami modern, cepat, dan terpercaya yang dirancang untuk memudahkan umat Islam dalam membaca Al-Qur'an, memeriksa jadwal shalat harian, menelaah ensiklopedia hadis, serta mengecek kalender Hijriah dan arah kiblat secara presisi.

---

## Fitur Utama

### 1. Al-Qur'an Digital 114 Surah
- Daftar lengkap 114 Surah beserta klasifikasi Makkiyah & Madaniyah.
- Teks Arab Utsmani berstandar dengan terjemahan resmi Bahasa Indonesia.
- Audio murottal pelafalan per ayat berkualitas jernih.
- Tafsir ringkas & komprehensif dari Kementerian Agama Republik Indonesia (Kemenag RI).
- Riwayat "Terakhir Dibaca" otomatis tersimpan di masing-masing browser pengguna.
- Fitur pencarian cepat (*Quick Search modal*) dengan pintasan `Ctrl+K`.

### 2. Jadwal Shalat & Notifikasi Adzan
- Jadwal waktu shalat resmi berbasis data Kementerian Agama RI untuk seluruh Kabupaten/Kota di Indonesia.
- Deteksi otomatis lokasi pengguna berbasis GPS/Geolokasi peramban.
- Hitung mundur (*live countdown*) menuju waktu shalat berikutnya.
- Notifikasi adzan otomatis ketika waktu shalat tiba (dilengkapi audio adzan resmi, termasuk lantunan khusus Adzan Subuh).

### 3. Ensiklopedia Hadis Nabi
- Kumpulan ribuan hadis pilihan dari kitab-kitab induk hadis.
- Teks matn Arab, terjemahan Indonesia, derajat keshahihan (*grade*), dan takhrij perawi.
- Pelajaran & hikmah praktis dari setiap hadis untuk amalan sehari-hari.
- Navigasi kategori populer (Niat, Shalat, Ilmu, Akhlak, Doa, Iman, Puasa, Sedekah).

### 4. Kalender Hijriah & Kompas Kiblat GPS
- Penanggalan ganda Masehi & Hijriah lengkap dengan kalender interaktif bulanan.
- Penanda hari-hari besar Islam & puasa sunnah (Ayyamul Bidh, Asyura, Arafah, dsb).
- Kalkulator derajat arah kiblat akurat dengan kompas interaktif realtime menuju Ka'bah.

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
- **Styling**: Tailwind CSS & Vanilla CSS
- **Font & Icon**: Google Fonts (Inter, Amiri, Scheherazade New) & Google Material Symbols

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
