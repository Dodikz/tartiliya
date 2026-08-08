export interface SurahMeta {
  number: number;
  name: string;
  latinName: string;
  arabicName: string;
  translation: string;
  numberOfAyahs: number;
  revelationType: 'Makkiyah' | 'Madaniyah';
  slug: string;
}

export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['`’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const rawSurahs = [
  { number: 1, name: "Al-Fatihah", latinName: "Al-Fatihah", arabicName: "الفاتحة", translation: "Pembukaan", numberOfAyahs: 7, revelationType: "Makkiyah" },
  { number: 2, name: "Al-Baqarah", latinName: "Al-Baqarah", arabicName: "البقرة", translation: "Sapi Betina", numberOfAyahs: 286, revelationType: "Madaniyah" },
  { number: 3, name: "Ali 'Imran", latinName: "Ali 'Imran", arabicName: "آل عمران", translation: "Keluarga Imran", numberOfAyahs: 200, revelationType: "Madaniyah" },
  { number: 4, name: "An-Nisa'", latinName: "An-Nisa'", arabicName: "النساء", translation: "Wanita", numberOfAyahs: 176, revelationType: "Madaniyah" },
  { number: 5, name: "Al-Ma'idah", latinName: "Al-Ma'idah", arabicName: "المائدة", translation: "Hidangan", numberOfAyahs: 120, revelationType: "Madaniyah" },
  { number: 6, name: "Al-An'am", latinName: "Al-An'am", arabicName: "الأنعام", translation: "Binatang Ternak", numberOfAyahs: 165, revelationType: "Makkiyah" },
  { number: 7, name: "Al-A'raf", latinName: "Al-A'raf", arabicName: "الأعراف", translation: "Tempat Tertinggi", numberOfAyahs: 206, revelationType: "Makkiyah" },
  { number: 8, name: "Al-Anfal", latinName: "Al-Anfal", arabicName: "الأنفال", translation: "Rampasan Perang", numberOfAyahs: 75, revelationType: "Madaniyah" },
  { number: 9, name: "At-Taubah", latinName: "At-Taubah", arabicName: "التوبة", translation: "Pengampunan", numberOfAyahs: 129, revelationType: "Madaniyah" },
  { number: 10, name: "Yunus", latinName: "Yunus", arabicName: "يونس", translation: "Nabi Yunus", numberOfAyahs: 109, revelationType: "Makkiyah" },
  { number: 11, name: "Hud", latinName: "Hud", arabicName: "هود", translation: "Nabi Hud", numberOfAyahs: 123, revelationType: "Makkiyah" },
  { number: 12, name: "Yusuf", latinName: "Yusuf", arabicName: "يوسف", translation: "Nabi Yusuf", numberOfAyahs: 111, revelationType: "Makkiyah" },
  { number: 13, name: "Ar-Ra'd", latinName: "Ar-Ra'd", arabicName: "الرعد", translation: "Guruh", numberOfAyahs: 43, revelationType: "Madaniyah" },
  { number: 14, name: "Ibrahim", latinName: "Ibrahim", arabicName: "إبراهيم", translation: "Nabi Ibrahim", numberOfAyahs: 52, revelationType: "Makkiyah" },
  { number: 15, name: "Al-Hijr", latinName: "Al-Hijr", arabicName: "الحجر", translation: "Gunung Al-Hijr", numberOfAyahs: 99, revelationType: "Makkiyah" },
  { number: 16, name: "An-Nahl", latinName: "An-Nahl", arabicName: "النحل", translation: "Lebah", numberOfAyahs: 128, revelationType: "Makkiyah" },
  { number: 17, name: "Al-Isra'", latinName: "Al-Isra'", arabicName: "الإسراء", translation: "Perjalanan Malam", numberOfAyahs: 111, revelationType: "Makkiyah" },
  { number: 18, name: "Al-Kahf", latinName: "Al-Kahf", arabicName: "الكهف", translation: "Gua", numberOfAyahs: 110, revelationType: "Makkiyah" },
  { number: 19, name: "Maryam", latinName: "Maryam", arabicName: "مريم", translation: "Maryam", numberOfAyahs: 98, revelationType: "Makkiyah" },
  { number: 20, name: "Taha", latinName: "Taha", arabicName: "طه", translation: "Taha", numberOfAyahs: 135, revelationType: "Makkiyah" },
  { number: 21, name: "Al-Anbiya'", latinName: "Al-Anbiya'", arabicName: "الأنبياء", translation: "Para Nabi", numberOfAyahs: 112, revelationType: "Makkiyah" },
  { number: 22, name: "Al-Hajj", latinName: "Al-Hajj", arabicName: "الحج", translation: "Haji", numberOfAyahs: 78, revelationType: "Madaniyah" },
  { number: 23, name: "Al-Mu'minun", latinName: "Al-Mu'minun", arabicName: "المؤمنون", translation: "Orang-orang Mukmin", numberOfAyahs: 118, revelationType: "Makkiyah" },
  { number: 24, name: "An-Nur", latinName: "An-Nur", arabicName: "النور", translation: "Cahaya", numberOfAyahs: 64, revelationType: "Madaniyah" },
  { number: 25, name: "Al-Furqan", latinName: "Al-Furqan", arabicName: "الفرقان", translation: "Pembeda", numberOfAyahs: 77, revelationType: "Makkiyah" },
  { number: 26, name: "Asy-Syu'ara'", latinName: "Asy-Syu'ara'", arabicName: "الشعراء", translation: "Para Penyair", numberOfAyahs: 227, revelationType: "Makkiyah" },
  { number: 27, name: "An-Naml", latinName: "An-Naml", arabicName: "النمل", translation: "Semut", numberOfAyahs: 93, revelationType: "Makkiyah" },
  { number: 28, name: "Al-Qasas", latinName: "Al-Qasas", arabicName: "القصص", translation: "Kisah-kisah", numberOfAyahs: 88, revelationType: "Makkiyah" },
  { number: 29, name: "Al-'Ankabut", latinName: "Al-'Ankabut", arabicName: "العنكبوت", translation: "Laba-laba", numberOfAyahs: 69, revelationType: "Makkiyah" },
  { number: 30, name: "Ar-Rum", latinName: "Ar-Rum", arabicName: "الروم", translation: "Bangsa Romawi", numberOfAyahs: 60, revelationType: "Makkiyah" },
  { number: 31, name: "Luqman", latinName: "Luqman", arabicName: "لقمان", translation: "Keluarga Luqman", numberOfAyahs: 34, revelationType: "Makkiyah" },
  { number: 32, name: "As-Sajdah", latinName: "As-Sajdah", arabicName: "Sajdah", translation: "Sujud", numberOfAyahs: 30, revelationType: "Makkiyah" },
  { number: 33, name: "Al-Ahzab", latinName: "Al-Ahzab", arabicName: "الأحزاب", translation: "Golongan yang Bersekutu", numberOfAyahs: 73, revelationType: "Madaniyah" },
  { number: 34, name: "Saba'", latinName: "Saba'", arabicName: "سبأ", translation: "Kaum Saba'", numberOfAyahs: 54, revelationType: "Makkiyah" },
  { number: 35, name: "Fatir", latinName: "Fatir", arabicName: "فاطر", translation: "Pencipta", numberOfAyahs: 45, revelationType: "Makkiyah" },
  { number: 36, name: "Yasin", latinName: "Yasin", arabicName: "يس", translation: "Yasin", numberOfAyahs: 83, revelationType: "Makkiyah" },
  { number: 37, name: "As-Saffat", latinName: "As-Saffat", arabicName: "الصافات", translation: "Yang Berbaris-baris", numberOfAyahs: 182, revelationType: "Makkiyah" },
  { number: 38, name: "Sad", latinName: "Sad", arabicName: "ص", translation: "Sad", numberOfAyahs: 88, revelationType: "Makkiyah" },
  { number: 39, name: "Az-Zumar", latinName: "Az-Zumar", arabicName: "الزمر", translation: "Rombongan", numberOfAyahs: 75, revelationType: "Makkiyah" },
  { number: 40, name: "Ghafir", latinName: "Ghafir", arabicName: "غافر", translation: "Maha Pengampun", numberOfAyahs: 85, revelationType: "Makkiyah" },
  { number: 41, name: "Fussilat", latinName: "Fussilat", arabicName: "فصلت", translation: "Yang Dijelaskan", numberOfAyahs: 54, revelationType: "Makkiyah" },
  { number: 42, name: "Asy-Syura", latinName: "Asy-Syura", arabicName: "الشورى", translation: "Musyawarah", numberOfAyahs: 53, revelationType: "Makkiyah" },
  { number: 43, name: "Az-Zukhruf", latinName: "Az-Zukhruf", arabicName: "الزخرف", translation: "Perhiasan", numberOfAyahs: 89, revelationType: "Makkiyah" },
  { number: 44, name: "Ad-Dukhan", latinName: "Ad-Dukhan", arabicName: "الدخان", translation: "Kabut", numberOfAyahs: 59, revelationType: "Makkiyah" },
  { number: 45, name: "Al-Jasiyah", latinName: "Al-Jasiyah", arabicName: "الجاثية", translation: "Yang Berlutut", numberOfAyahs: 37, revelationType: "Makkiyah" },
  { number: 46, name: "Al-Ahqaf", latinName: "Al-Ahqaf", arabicName: "الأحقاف", translation: "Bukit-bukit Pasir", numberOfAyahs: 35, revelationType: "Makkiyah" },
  { number: 47, name: "Muhammad", latinName: "Muhammad", arabicName: "محمد", translation: "Nabi Muhammad", numberOfAyahs: 38, revelationType: "Madaniyah" },
  { number: 48, name: "Al-Fath", latinName: "Al-Fath", arabicName: "الفتح", translation: "Kemenangan", numberOfAyahs: 29, revelationType: "Madaniyah" },
  { number: 49, name: "Al-Hujurat", latinName: "Al-Hujurat", arabicName: "Hujurat", translation: "Kamar-kamar", numberOfAyahs: 18, revelationType: "Madaniyah" },
  { number: 50, name: "Qaf", latinName: "Qaf", arabicName: "ق", translation: "Qaf", numberOfAyahs: 45, revelationType: "Makkiyah" },
  { number: 51, name: "Az-Zariyat", latinName: "Az-Zariyat", arabicName: "الذاريات", translation: "Angin yang Menerbangkan", numberOfAyahs: 60, revelationType: "Makkiyah" },
  { number: 52, name: "At-Tur", latinName: "At-Tur", arabicName: "الطور", translation: "Bukit Tur", numberOfAyahs: 49, revelationType: "Makkiyah" },
  { number: 53, name: "An-Najm", latinName: "An-Najm", arabicName: "النجم", translation: "Bintang", numberOfAyahs: 62, revelationType: "Makkiyah" },
  { number: 54, name: "Al-Qamar", latinName: "Al-Qamar", arabicName: "القمر", translation: "Bulan", numberOfAyahs: 55, revelationType: "Makkiyah" },
  { number: 55, name: "Ar-Rahman", latinName: "Ar-Rahman", arabicName: "الرحمن", translation: "Maha Pengasih", numberOfAyahs: 78, revelationType: "Madaniyah" },
  { number: 56, name: "Al-Waqi'ah", latinName: "Al-Waqi'ah", arabicName: "الواقعة", translation: "Hari Kiamat", numberOfAyahs: 96, revelationType: "Makkiyah" },
  { number: 57, name: "Al-Hadid", latinName: "Al-Hadid", arabicName: "الحديد", translation: "Besi", numberOfAyahs: 29, revelationType: "Madaniyah" },
  { number: 58, name: "Al-Mujadilah", latinName: "Al-Mujadilah", arabicName: "المجادلة", translation: "Gugatan", numberOfAyahs: 22, revelationType: "Madaniyah" },
  { number: 59, name: "Al-Hasyr", latinName: "Al-Hasyr", arabicName: "الحشر", translation: "Pengusiran", numberOfAyahs: 24, revelationType: "Madaniyah" },
  { number: 60, name: "Al-Mumtahanah", latinName: "Al-Mumtahanah", arabicName: "الممتحنة", translation: "Wanita yang Diuji", numberOfAyahs: 13, revelationType: "Madaniyah" },
  { number: 61, name: "As-Saff", latinName: "As-Saff", arabicName: "الصف", translation: "Barisan", numberOfAyahs: 14, revelationType: "Madaniyah" },
  { number: 62, name: "Al-Jumu'ah", latinName: "Al-Jumu'ah", arabicName: "الجمعة", translation: "Hari Jum'at", numberOfAyahs: 11, revelationType: "Madaniyah" },
  { number: 63, name: "Al-Munafiqun", latinName: "Al-Munafiqun", arabicName: "المنافقون", translation: "Orang-orang Munafik", numberOfAyahs: 11, revelationType: "Madaniyah" },
  { number: 64, name: "At-Taghabun", latinName: "At-Taghabun", arabicName: "التغابن", translation: "Hari Dinampakkan Kesalahan", numberOfAyahs: 18, revelationType: "Madaniyah" },
  { number: 65, name: "At-Talaq", latinName: "At-Talaq", arabicName: "الطلاق", translation: "Talak", numberOfAyahs: 12, revelationType: "Madaniyah" },
  { number: 66, name: "At-Tahrim", latinName: "At-Tahrim", arabicName: "التحريم", translation: "Mengharamkan", numberOfAyahs: 12, revelationType: "Madaniyah" },
  { number: 67, name: "Al-Mulk", latinName: "Al-Mulk", arabicName: "الملك", translation: "Kerajaan", numberOfAyahs: 30, revelationType: "Makkiyah" },
  { number: 68, name: "Al-Qalam", latinName: "Al-Qalam", arabicName: "القلم", translation: "Pena", numberOfAyahs: 52, revelationType: "Makkiyah" },
  { number: 69, name: "Al-Haqqah", latinName: "Al-Haqqah", arabicName: "الحاقة", translation: "Hari Kiamat yang Pasti", numberOfAyahs: 52, revelationType: "Makkiyah" },
  { number: 70, name: "Al-Ma'arij", latinName: "Al-Ma'arij", arabicName: "المعارج", translation: "Tempat Naik", numberOfAyahs: 44, revelationType: "Makkiyah" },
  { number: 71, name: "Nuh", latinName: "Nuh", arabicName: "نوح", translation: "Nabi Nuh", numberOfAyahs: 28, revelationType: "Makkiyah" },
  { number: 72, name: "Al-Jinn", latinName: "Al-Jinn", arabicName: "الجن", translation: "Jin", numberOfAyahs: 28, revelationType: "Makkiyah" },
  { number: 73, name: "Al-Muzzammil", latinName: "Al-Muzzammil", arabicName: "المزمل", translation: "Orang yang Berselimut", numberOfAyahs: 20, revelationType: "Makkiyah" },
  { number: 74, name: "Al-Muddassir", latinName: "Al-Muddassir", arabicName: "المدثر", translation: "Orang yang Berkemul", numberOfAyahs: 56, revelationType: "Makkiyah" },
  { number: 75, name: "Al-Qiyamah", latinName: "Al-Qiyamah", arabicName: "القيامة", translation: "Hari Kiamat", numberOfAyahs: 40, revelationType: "Makkiyah" },
  { number: 76, name: "Al-Insan", latinName: "Al-Insan", arabicName: "الإنسان", translation: "Manusia", numberOfAyahs: 31, revelationType: "Madaniyah" },
  { number: 77, name: "Al-Mursalat", latinName: "Al-Mursalat", arabicName: "المرسلات", translation: "Malaikat-malaikat yang Diutus", numberOfAyahs: 50, revelationType: "Makkiyah" },
  { number: 78, name: "An-Naba'", latinName: "An-Naba'", arabicName: "النبأ", translation: "Berita Besar", numberOfAyahs: 40, revelationType: "Makkiyah" },
  { number: 79, name: "An-Nazi'at", latinName: "An-Nazi'at", arabicName: "النازعات", translation: "Malaikat yang Mencabut", numberOfAyahs: 46, revelationType: "Makkiyah" },
  { number: 80, name: "'Abasa", latinName: "'Abasa", arabicName: "عبس", translation: "Ia Bermuka Masam", numberOfAyahs: 42, revelationType: "Makkiyah" },
  { number: 81, name: "At-Takwir", latinName: "At-Takwir", arabicName: "التكوير", translation: "Penggulungan", numberOfAyahs: 29, revelationType: "Makkiyah" },
  { number: 82, name: "Al-Infitar", latinName: "Al-Infitar", arabicName: "الإنفطار", translation: "Terbelah", numberOfAyahs: 19, revelationType: "Makkiyah" },
  { number: 83, name: "Al-Mutaffifin", latinName: "Al-Mutaffifin", arabicName: "المطففين", translation: "Orang-orang Kecurangan", numberOfAyahs: 36, revelationType: "Makkiyah" },
  { number: 84, name: "Al-Insyiqaq", latinName: "Al-Insyiqaq", arabicName: "الإنشقاق", translation: "Terbelah", numberOfAyahs: 25, revelationType: "Makkiyah" },
  { number: 85, name: "Al-Buruj", latinName: "Al-Buruj", arabicName: "البروج", translation: "Gugusan Bintang", numberOfAyahs: 22, revelationType: "Makkiyah" },
  { number: 86, name: "At-Tariq", latinName: "At-Tariq", arabicName: "الطارق", translation: "Yang Datang di Malam Hari", numberOfAyahs: 17, revelationType: "Makkiyah" },
  { number: 87, name: "Al-A'la", latinName: "Al-A'la", arabicName: "الأعلى", translation: "Maha Tinggi", numberOfAyahs: 19, revelationType: "Makkiyah" },
  { number: 88, name: "Al-Ghasyiyah", latinName: "Al-Ghasyiyah", arabicName: "الغاشية", translation: "Hari Pembalasan", numberOfAyahs: 26, revelationType: "Makkiyah" },
  { number: 89, name: "Al-Fajr", latinName: "Al-Fajr", arabicName: "الفجر", translation: "Fajar", numberOfAyahs: 30, revelationType: "Makkiyah" },
  { number: 90, name: "Al-Balad", latinName: "Al-Balad", arabicName: "البلد", translation: "Negeri", numberOfAyahs: 20, revelationType: "Makkiyah" },
  { number: 91, name: "Asy-Syams", latinName: "Asy-Syams", arabicName: "الشمس", translation: "Matahari", numberOfAyahs: 15, revelationType: "Makkiyah" },
  { number: 92, name: "Al-Lail", latinName: "Al-Lail", arabicName: "الليل", translation: "Malam", numberOfAyahs: 21, revelationType: "Makkiyah" },
  { number: 93, name: "Ad-Duha", latinName: "Ad-Duha", arabicName: "الضحى", translation: "Waktu Dhuha", numberOfAyahs: 11, revelationType: "Makkiyah" },
  { number: 94, name: "Asy-Syarh", latinName: "Asy-Syarh", arabicName: "الشرح", translation: "Lapang", numberOfAyahs: 8, revelationType: "Makkiyah" },
  { number: 95, name: "At-Tin", latinName: "At-Tin", arabicName: "التين", translation: "Buah Tin", numberOfAyahs: 8, revelationType: "Makkiyah" },
  { number: 96, name: "Al-'Alaq", latinName: "Al-'Alaq", arabicName: "العلق", translation: "Segumpal Darah", numberOfAyahs: 19, revelationType: "Makkiyah" },
  { number: 97, name: "Al-Qadr", latinName: "Al-Qadr", arabicName: "القدر", translation: "Kemuliaan", numberOfAyahs: 5, revelationType: "Makkiyah" },
  { number: 98, name: "Al-Bayyinah", latinName: "Al-Bayyinah", arabicName: "البينة", translation: "Bukti Nyata", numberOfAyahs: 8, revelationType: "Madaniyah" },
  { number: 99, name: "Az-Zalzalah", latinName: "Az-Zalzalah", arabicName: "الزلزلة", translation: "Kegoncangan", numberOfAyahs: 8, revelationType: "Madaniyah" },
  { number: 100, name: "Al-'Adiyat", latinName: "Al-'Adiyat", arabicName: "العاديات", translation: "Kuda Perang", numberOfAyahs: 11, revelationType: "Makkiyah" },
  { number: 101, name: "Al-Qari'ah", latinName: "Al-Qari'ah", arabicName: "القارعة", translation: "Hari Kiamat", numberOfAyahs: 11, revelationType: "Makkiyah" },
  { number: 102, name: "At-Takasur", latinName: "At-Takasur", arabicName: "التكاثر", translation: "Bermegah-megahan", numberOfAyahs: 8, revelationType: "Makkiyah" },
  { number: 103, name: "Al-'Asr", latinName: "Al-'Asr", arabicName: "العصر", translation: "Masa/Waktu", numberOfAyahs: 3, revelationType: "Makkiyah" },
  { number: 104, name: "Al-Humazah", latinName: "Al-Humazah", arabicName: "الهمزة", translation: "Pengumpat", numberOfAyahs: 9, revelationType: "Makkiyah" },
  { number: 105, name: "Al-Fil", latinName: "Al-Fil", arabicName: "الفيل", translation: "Gajah", numberOfAyahs: 5, revelationType: "Makkiyah" },
  { number: 106, name: "Quraisy", latinName: "Quraisy", arabicName: "قريش", translation: "Suku Quraisy", numberOfAyahs: 4, revelationType: "Makkiyah" },
  { number: 107, name: "Al-Ma'un", latinName: "Al-Ma'un", arabicName: "الماعون", translation: "Barang-barang Berguna", numberOfAyahs: 7, revelationType: "Makkiyah" },
  { number: 108, name: "Al-Kausar", latinName: "Al-Kausar", arabicName: "الكوثر", translation: "Nikmat yang Banyak", numberOfAyahs: 3, revelationType: "Makkiyah" },
  { number: 109, name: "Al-Kafirun", latinName: "Al-Kafirun", arabicName: "الكافرون", translation: "Orang-orang Kafir", numberOfAyahs: 6, revelationType: "Makkiyah" },
  { number: 110, name: "An-Nasr", latinName: "An-Nasr", arabicName: "النصر", translation: "Pertolongan", numberOfAyahs: 3, revelationType: "Madaniyah" },
  { number: 111, name: "Al-Lahab", latinName: "Al-Lahab", arabicName: "المسد", translation: "Gejolak Api", numberOfAyahs: 5, revelationType: "Makkiyah" },
  { number: 112, name: "Al-Ikhlas", latinName: "Al-Ikhlas", arabicName: "الإخلاص", translation: "Ikhlas", numberOfAyahs: 4, revelationType: "Makkiyah" },
  { number: 113, name: "Al-Falaq", latinName: "Al-Falaq", arabicName: "الفلق", translation: "Waktu Subuh", numberOfAyahs: 5, revelationType: "Makkiyah" },
  { number: 114, name: "An-Nas", latinName: "An-Nas", arabicName: "الناس", translation: "Manusia", numberOfAyahs: 6, revelationType: "Makkiyah" }
];

export const SURAH_LIST: SurahMeta[] = rawSurahs.map(s => ({
  ...s,
  slug: createSlug(s.name)
}));

export function findSurahBySlugOrNumber(identifier: string): SurahMeta | undefined {
  const cleanId = identifier.trim().toLowerCase();
  return SURAH_LIST.find(s => s.slug === cleanId || String(s.number) === cleanId);
}
