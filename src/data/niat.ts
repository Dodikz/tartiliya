export interface NiatItem {
  id: string;
  category: 'shalat-fardhu' | 'shalat-sunnah' | 'puasa' | 'thaharah' | 'zakat';
  categoryLabel: string;
  title: string;
  arab: string;
  latin: string;
  translation: string;
  explanation?: string;
}

export const NIAT_DATA: NiatItem[] = [
  {
    id: 'shalat-subuh-sendiri',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Subuh (Sendiri)',
    arab: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhash-shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Subuh dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan sebanyak 2 rakaat pada waktu terbit fajar shadiq hingga sebelum terbit matahari.'
  },
  {
    id: 'shalat-subuh-makmum',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Subuh (Makmum)',
    arab: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhash-shubhi rok'ataini mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Subuh dua rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.'
  },
  {
    id: 'shalat-subuh-imam',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Subuh (Imam)',
    arab: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ إِمَامًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhash-shubhi rok'ataini mustaqbilal qiblati imaaman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Subuh dua rakaat menghadap kiblat sebagai imam karena Allah Ta’ala.'
  },
  {
    id: 'shalat-dzuhur-sendiri',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Dzuhur (Sendiri)',
    arab: 'أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhazh-zhuhri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan 4 rakaat setelah matahari tergelincir dari puncaknya ke arah barat.'
  },
  {
    id: 'shalat-dzuhur-makmum',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Dzuhur (Makmum)',
    arab: 'أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhazh-zhuhri arba'a raka'aatin mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Dzuhur empat rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.'
  },
  {
    id: 'shalat-ashar-sendiri',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Ashar (Sendiri)',
    arab: 'أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Ashar empat rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan 4 rakaat saat bayangan benda sama panjang dengan aslinya hingga terbenam matahari.'
  },
  {
    id: 'shalat-ashar-makmum',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Ashar (Makmum)',
    arab: 'أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Ashar empat rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.'
  },
  {
    id: 'shalat-maghrib-sendiri',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Maghrib (Sendiri)',
    arab: 'أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Maghrib tiga rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan 3 rakaat sesaat setelah seluruh piringan matahari terbenam.'
  },
  {
    id: 'shalat-maghrib-makmum',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Maghrib (Makmum)',
    arab: 'أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Maghrib tiga rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.'
  },
  {
    id: 'shalat-isya-sendiri',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Isya (Sendiri)',
    arab: 'أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal 'isyaa-i arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Isya empat rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan 4 rakaat setelah hilangnya mega merah di langit barat sampai sepertiga/tengah malam.'
  },
  {
    id: 'shalat-isya-makmum',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Isya (Makmum)',
    arab: 'أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal 'isyaa-i arba'a raka'aatin mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Isya empat rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.'
  },
  {
    id: 'shalat-jumat-makmum',
    category: 'shalat-fardhu',
    categoryLabel: 'Shalat Fardhu',
    title: 'Niat Shalat Jumat (Makmum)',
    arab: 'أُصَلِّي فَرْضَ الْجُمُعَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii fardhal jumu'ati rok'ataini mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat fardhu Jumat dua rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.',
    explanation: 'Wajib bagi laki-laki muslim merdeka dan baligh pada hari Jumat di waktu Dzuhur.'
  },
  {
    id: 'shalat-tahajud',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Tahajjud',
    arab: 'أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatat-tahajjudi rok'ataini mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Tahajjud dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dilakukan di malam hari setelah tidur terlebih dahulu, minimal 2 rakaat.'
  },
  {
    id: 'shalat-dhuha',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Dhuha',
    arab: 'أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatadh-dhuhaa rok'ataini mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Dhuha dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Waktu pelaksanaan dimulai sejak matahari meninggi sepenggalah hingga menjelang waktu Dzuhur.'
  },
  {
    id: 'shalat-witir-1',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Witir (1 Rakaat)',
    arab: 'أُصَلِّي سُنَّةَ الْوِتْرِ رَكْعَةً مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatal witri rok'atan mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Witir satu rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Shalat penutup malam dengan bilangan rakaat ganjil (1, 3, 5, dst).'
  },
  {
    id: 'shalat-witir-2',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Witir (2 Rakaat)',
    arab: 'أُصَلِّي سُنَّةَ مِنَ الْوِتْرِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnata minal witri rok'ataini mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah dari bagian witir dua rakaat menghadap kiblat karena Allah Ta’ala.'
  },
  {
    id: 'shalat-tarawih-sendiri',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Tarawih (Sendiri / Munfarid)',
    arab: 'أُصَلِّي سُنَّةَ التَّرَاوِيحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatat-taraawiihi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Tarawih dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Khusus dikerjakan pada malam-malam bulan suci Ramadhan setelah shalat Isya.'
  },
  {
    id: 'shalat-tarawih-makmum',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Tarawih (Makmum)',
    arab: 'أُصَلِّي سُنَّةَ التَّرَاوِيحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatat-taraawiihi rok'ataini mustaqbilal qiblati ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Tarawih dua rakaat menghadap kiblat sebagai makmum karena Allah Ta’ala.'
  },
  {
    id: 'shalat-istikharah',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Istikharah',
    arab: 'أُصَلِّي سُنَّةَ الْإِسْتِخَارَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatal istikhaarati rok'ataini mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Istikharah dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan 2 rakaat saat memohon petunjuk pilihan terbaik dari Allah SWT.'
  },
  {
    id: 'shalat-taubat',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Taubat',
    arab: 'أُصَلِّي سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatat-taubati rok'ataini mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Taubat dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan untuk memohon ampunan atas dosa-dosa dan kembali ke jalan Allah.'
  },
  {
    id: 'shalat-hajat',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Hajat',
    arab: 'أُصَلِّي سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatal haajati rok'ataini mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Hajat dua rakaat menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Dikerjakan ketika memiliki hajat/keinginan tertentu agar dikabulkan Allah SWT.'
  },
  {
    id: 'shalat-rawatib-qobliyah-subuh',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Sunnah Fajar / Qabliyah Subuh',
    arab: 'أُصَلِّي سُنَّةَ الْفَجْرِ رَكْعَتَيْنِ قَبْلِيَّةً مُسْتَقْبِلَ الْقِبْلَةِ لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatal fajri rok'ataini qabliyyatan mustaqbilal qiblati lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Fajar dua rakaat sebelum Subuh menghadap kiblat karena Allah Ta’ala.',
    explanation: 'Keutamaannya lebih baik daripada dunia beserta seluruh isinya (HR. Muslim).'
  },
  {
    id: 'shalat-idul-fitri',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Idul Fitri (Makmum)',
    arab: 'أُصَلِّي سُنَّةً لِعِيدِ الْفِطْرِ رَكْعَتَيْنِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatan li'iidil fithri rok'ataini ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Idul Fitri dua rakaat sebagai makmum karena Allah Ta’ala.',
    explanation: 'Dilakukan berjamaah pada pagi hari 1 Syawal dengan 7 takbir di rakaat pertama dan 5 takbir di rakaat kedua.'
  },
  {
    id: 'shalat-idul-adha',
    category: 'shalat-sunnah',
    categoryLabel: 'Shalat Sunnah',
    title: 'Niat Shalat Idul Adha (Makmum)',
    arab: 'أُصَلِّي سُنَّةً لِعِيدِ الْأَضْحَى رَكْعَتَيْنِ مَأْمُومًا لِلَّهِ تَعَالَى',
    latin: "Ushollii sunnatan li'iidil adh-haa rok'ataini ma'muuman lillaahi ta'aala.",
    translation: 'Aku berniat shalat sunnah Idul Adha dua rakaat sebagai makmum karena Allah Ta’ala.',
    explanation: 'Dilakukan berjamaah pada pagi hari 10 Dzulhijjah sebelum penyembelihan hewan kurban.'
  },
  {
    id: 'puasa-ramadhan',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Ramadhan',
    arab: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ السَّنَةِ لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma ghadin 'an adaa-i fardhi syahri ramadhaana haadzihis-sanati lillaahi ta'aala.",
    translation: 'Aku berniat berpuasa esok hari untuk menunaikan fardhu bulan Ramadhan tahun ini karena Allah Ta’ala.',
    explanation: 'Wajib diniatkan pada malam hari sebelum fajar terbit untuk puasa wajib.'
  },
  {
    id: 'puasa-senin',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Sunnah Hari Senin',
    arab: 'نَوَيْتُ صَوْمَ يَوْمِ الِاثْنَيْنِ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma yaumil itsnaini sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah hari Senin karena Allah Ta’ala.',
    explanation: 'Hari di mana Rasulullah SAW dilahirkan dan diturunkannya wahyu.'
  },
  {
    id: 'puasa-kamis',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Sunnah Hari Kamis',
    arab: 'نَوَيْتُ صَوْمَ يَوْمِ الْخَمِيسِ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma yaumil khamiisi sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah hari Kamis karena Allah Ta’ala.',
    explanation: 'Hari diangkatnya amalan-amalan manusia kepada Allah SWT.'
  },
  {
    id: 'puasa-ayyamul-bidh',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Ayyamul Bidh (13, 14, 15 Hijriyah)',
    arab: 'نَوَيْتُ صَوْمَ أَيَّامِ الْبِيضِ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma ayyaamil biidhi sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah hari-hari putih (Ayyamul Bidh) karena Allah Ta’ala.',
    explanation: 'Dikerjakan setiap tanggal 13, 14, dan 15 pada bulan-bulan Hijriyah.'
  },
  {
    id: 'puasa-daud',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Daud (Sehari Puasa Sehari Berbuka)',
    arab: 'نَوَيْتُ صَوْمَ دَاوُدَ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma daawuuda sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah Daud karena Allah Ta’ala.',
    explanation: 'Puasa sunnah yang paling disukai Allah SWT: sehari berpuasa dan sehari berbuka.'
  },
  {
    id: 'puasa-arafah',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Sunnah Arafah (9 Dzulhijjah)',
    arab: 'نَوَيْتُ صَوْمَ عَرَفَةَ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma 'arafata sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah Arafah karena Allah Ta’ala.',
    explanation: 'Menghapuskan dosa setahun yang lalu dan setahun yang akan datang (HR. Muslim).'
  },
  {
    id: 'puasa-asyura',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Sunnah Asyura (10 Muharram)',
    arab: 'نَوَيْتُ صَوْمَ عَاشُورَاءَ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma 'aasyuuraa-a sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah Asyura karena Allah Ta’ala.',
    explanation: 'Keutamaannya dapat menghapus dosa setahun yang lalu (HR. Muslim).'
  },
  {
    id: 'puasa-syawal',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Sunnah Syawal (6 Hari)',
    arab: 'نَوَيْتُ صَوْمَ شَهْرِ شَوَّالٍ سُنَّةً لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma syahri syawwaalin sunnatan lillaahi ta'aala.",
    translation: 'Aku berniat puasa sunnah Syawal karena Allah Ta’ala.',
    explanation: 'Berpuasa 6 hari di bulan Syawal setelah Ramadhan bernilai pahala puasa setahun penuh.'
  },
  {
    id: 'puasa-qadha',
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Niat Puasa Qadha Ramadhan (Mengganti Puasa)',
    arab: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ قَضَاءِ فَرْضِ شَهْرِ رَمَضَانَ لِلَّهِ تَعَالَى',
    latin: "Nawaitu shauma ghadin 'an qadhaa-i fardhi syahri ramadhaana lillaahi ta'aala.",
    translation: 'Aku berniat puasa esok hari untuk mengqadha fardhu bulan Ramadhan karena Allah Ta’ala.',
    explanation: 'Wajib bagi yang meninggalkan puasa Ramadhan karena uzur syar’i.'
  },
  {
    id: 'wudhu',
    category: 'thaharah',
    categoryLabel: 'Thaharah (Bersuci)',
    title: 'Niat Wudhu',
    arab: 'نَوَيْتُ الْوُضُوءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitul wudhuu-a liraf'il hadatsil ashghari fardhan lillaahi ta'aala.",
    translation: 'Aku berniat berwudhu untuk menghilangkan hadats kecil, fardhu karena Allah Ta’ala.',
    explanation: 'Diniatkan saat pertama kali membasuh muka / wajah.'
  },
  {
    id: 'mandi-wajib-junub',
    category: 'thaharah',
    categoryLabel: 'Thaharah (Bersuci)',
    title: 'Niat Mandi Wajib (Junub / Hadas Besar)',
    arab: 'نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ عَنْ جَمِيعِ الْبَدَنِ فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitul ghusla liraf'il hadatsil akbari 'an jamii'il badani fardhan lillaahi ta'aala.",
    translation: 'Aku berniat mandi untuk menghilangkan hadats besar dari seluruh tubuh, fardhu karena Allah Ta’ala.',
    explanation: 'Diniatkan bersamaan saat pertama kali mengalirkan air ke bagian tubuh.'
  },
  {
    id: 'mandi-haid',
    category: 'thaharah',
    categoryLabel: 'Thaharah (Bersuci)',
    title: 'Niat Mandi Wajib Setelah Haid',
    arab: 'نَوَيْتُ الْغُسْلَ لِرَفْعِ حَدَثِ الْحَيْضِ فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitul ghusla liraf'i hadatsil haidhi fardhan lillaahi ta'aala.",
    translation: 'Aku berniat mandi untuk mensucikan hadats haid, fardhu karena Allah Ta’ala.'
  },
  {
    id: 'mandi-nifas',
    category: 'thaharah',
    categoryLabel: 'Thaharah (Bersuci)',
    title: 'Niat Mandi Wajib Setelah Nifas',
    arab: 'نَوَيْتُ الْغُسْلَ لِرَفْعِ حَدَثِ النِّفَاسِ فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitul ghusla liraf'i hadatsin nifaasi fardhan lillaahi ta'aala.",
    translation: 'Aku berniat mandi untuk mensucikan hadats nifas, fardhu karena Allah Ta’ala.'
  },
  {
    id: 'tayamum',
    category: 'thaharah',
    categoryLabel: 'Thaharah (Bersuci)',
    title: 'Niat Tayammum',
    arab: 'نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitut-tayammuma listibaahatish-shalaati fardhan lillaahi ta'aala.",
    translation: 'Aku berniat melakukan tayammum agar diperbolehkan shalat, fardhu karena Allah Ta’ala.',
    explanation: 'Sebagai pengganti wudhu atau mandi ketika tidak ada air atau ada uzur sakit.'
  },
  {
    id: 'zakat-fitrah-sendiri',
    category: 'zakat',
    categoryLabel: 'Zakat & Sedekah',
    title: 'Niat Zakat Fitrah (Untuk Diri Sendiri)',
    arab: 'نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ نَفْسِي فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitu an ukhrija zakaatal fithri 'an nafsii fardhan lillaahi ta'aala.",
    translation: 'Aku berniat mengeluarkan zakat fitrah untuk diriku sendiri, fardhu karena Allah Ta’ala.',
    explanation: 'Ditunaikan pada bulan Ramadhan hingga sebelum pelaksanaan shalat Idul Fitri.'
  },
  {
    id: 'zakat-fitrah-keluarga',
    category: 'zakat',
    categoryLabel: 'Zakat & Sedekah',
    title: 'Niat Zakat Fitrah (Untuk Diri Sendiri dan Seluruh Keluarga)',
    arab: 'نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنِّي وَعَنْ جَمِيعِ مَنْ يَلْزَمُنِي نَفَقَتُهُمْ شَرْعًا فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitu an ukhrija zakaatal fithri 'annii wa 'an jamii'i man yalzamunii nafaqatuhum syar'an fardhan lillaahi ta'aala.",
    translation: 'Aku berniat mengeluarkan zakat fitrah untuk diriku dan seluruh orang yang nafkahnya menjadi tanggunganku, fardhu karena Allah Ta’ala.'
  },
  {
    id: 'zakat-maal',
    category: 'zakat',
    categoryLabel: 'Zakat & Sedekah',
    title: 'Niat Zakat Maal (Harta Kekayaan)',
    arab: 'نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ مَالِي فَرْضًا لِلَّهِ تَعَالَى',
    latin: "Nawaitu an ukhrija zakaata maalii fardhan lillaahi ta'aala.",
    translation: 'Aku berniat mengeluarkan zakat dari hartaku, fardhu karena Allah Ta’ala.',
    explanation: 'Wajib dikeluarkan jika telah mencapai nishab (setara 85 gr emas) dan genap haul 1 tahun.'
  },
  {
    id: 'doa-sedekah',
    category: 'zakat',
    categoryLabel: 'Zakat & Sedekah',
    title: 'Niat & Doa Saat Berinfaq / Bersedekah',
    arab: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
    latin: "Rabbanaa taqabbal minnaa innaka antas-samii'ul 'aliim.",
    translation: 'Ya Tuhan kami, terimalah amal dari kami. Sungguh Engkau Maha Mendengar lagi Maha Mengetahui (QS. Al-Baqarah: 127).',
    explanation: 'Dianjurkan dibaca saat menyerahkan infaq dan sedekah ikhlas karena Allah.'
  }
];
