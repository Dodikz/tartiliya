export interface IndonesianHadithItem {
  number: number;
  arab: string;
  id: string;
  collectionName?: string;
  collectionSlug?: string;
}

export interface HadithListResponse {
  name: string;
  slug: string;
  total: number;
  pagination: {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
  };
  items: IndonesianHadithItem[];
}

export interface HadithCollectionMeta {
  name: string;
  slug: string;
  total: number;
}

export interface CuratedThematicHadith {
  category: 'iman' | 'shalat' | 'puasa' | 'sedekah' | 'ilmu' | 'akhlak';
  categoryLabel: string;
  title: string;
  kitabReference: string;
  collection: string;
  collectionSlug: string;
  number: number;
  arab: string;
  translation: string;
  lesson?: string;
}

export const CURATED_THEMATIC_HADITHS: CuratedThematicHadith[] = [
  {
    category: 'iman',
    categoryLabel: 'Iman',
    title: 'Pilar-Pilar Rukun Islam dan Fondasi Iman',
    kitabReference: 'Shahih Bukhari No. 8 (Kitab Al-Iman)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 8,
    arab: 'بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامِ الصَّلَاةِ وَإِيتَاءِ الزَّكَاةِ وَالْحَجِّ وَصَوْمِ رَمَضَانَ',
    translation: 'Islam dibangun di atas lima perkara: bersaksi bahwa tiada sesembahan yang berhak disembah selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, menunaikan haji, dan berpuasa di bulan Ramadhan.',
    lesson: 'Fondasi utama keislaman dan keimanan seorang muslim dimulai dari ketauhidan mutlak.'
  },
  {
    category: 'iman',
    categoryLabel: 'Iman',
    title: 'Manisnya Iman dan Mencintai Allah & Rasul-Nya',
    kitabReference: 'Shahih Bukhari No. 16 (Kitab Al-Iman)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 16,
    arab: 'ثَلَاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلَاوَةَ الْإِيمَانِ أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا وَأَنْ يُحِبَّ الْمَرْءَ لَا يُحِبُّهُ إِلَّا لِلَّهِ وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ',
    translation: 'Tiga perkara yang bila ada pada diri seseorang, ia akan merasakan manisnya iman: Menjadikan Allah dan Rasul-Nya lebih dicintainya daripada selain keduanya, mencintai seseorang semata-mata karena Allah, dan benci untuk kembali kepada kekafiran sebagaimana ia benci dilemparkan ke dalam api neraka.',
    lesson: 'Kelezatan iman diraih tatkala cinta kepada Allah dan Rasul menduduki posisi tertinggi dalam sanubari.'
  },
  {
    category: 'iman',
    categoryLabel: 'Iman',
    title: 'Tanda Keimanan: Mencintai Saudaranya',
    kitabReference: 'Shahih Bukhari No. 13 (Kitab Al-Iman)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 13,
    arab: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    translation: 'Tidaklah beriman salah seorang di antara kalian sampai dia mencintai untuk saudaranya apa yang dia cintai untuk dirinya sendiri.',
    lesson: 'Empati dan ukhuwah islamiyah adalah barometer kesempurnaan iman seorang hamba.'
  },
  {
    category: 'iman',
    categoryLabel: 'Iman',
    title: 'Rasa Malu Merupakan Bagian dari Cabang Iman',
    kitabReference: 'Shahih Muslim No. 57 (Kitab Al-Iman)',
    collection: 'Muslim',
    collectionSlug: 'muslim',
    number: 57,
    arab: 'الْإِيمَانُ بِضْعٌ وَسَبْعُونَ أَوْ بِضْعٌ وَسِتُّونَ شُعْبَةً فَأَفْضَلُهَا قَوْلُ لَا إِلَهَ إِلَّا اللَّهُ وَأَدْنَاهَا إِمَاطَةُ الْأَذَى عَنْ الطَّرِيقِ وَالْحَيَاءُ شُعْبَةٌ مِنْ الْإِيمَانِ',
    translation: 'Iman itu memiliki lebih dari tujuh puluh atau enam puluh cabang. Cabang yang paling utama adalah ucapan Laa ilaaha illallaah, dan cabang yang paling rendah adalah menyingkirkan gangguan dari jalan, dan rasa malu adalah salah satu cabang dari iman.',
    lesson: 'Malu bermaksiat kepada Allah adalah perisai pelindung kemurnian iman.'
  },
  {
    category: 'shalat',
    categoryLabel: 'Shalat',
    title: 'Shalat Lima Waktu Sebagai Penghapus Dosa',
    kitabReference: 'Shahih Bukhari No. 528 (Kitab Ash-Shalat)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 528,
    arab: 'أَرَأَيْتُمْ لَوْ أَنَّ نَهَرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ قَالُوا لَا يُبْقِي مِنْ دَرَنِهِ شَيْئًا قَالَ فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللَّهُ بِهَا الْخَطَايَا',
    translation: 'Bagaimana pendapat kalian jika di depan pintu rumah salah seorang di antara kalian ada sungai yang mengalir, lalu ia mandi di situ lima kali sehari, apakah masih ada kotoran yang tersisa pada badannya? Para sahabat menjawab: Tidak tersisa sedikit pun kotorannya. Beliau bersabda: Begitulah perumpamaan shalat lima waktu, dengannya Allah menghapuskan dosa-dosa.',
    lesson: 'Shalat 5 waktu membersihkan noda dosa dan kekhilafan harian seorang muslim.'
  },
  {
    category: 'shalat',
    categoryLabel: 'Shalat',
    title: 'Keutamaan Shalat Berjamaah 27 Derajat',
    kitabReference: 'Shahih Bukhari No. 645 (Kitab Al-Adzan / Shalat Berjamaah)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 645,
    arab: 'صَلَاةُ الْجَمَاعَةِ تَفْضُلُ صَلَاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً',
    translation: 'Shalat berjamaah lebih utama daripada shalat sendirian sebanyak dua puluh tujuh derajat.',
    lesson: 'Ganjaran berlipat ganda shalat berjamaah di masjid bagi kaum muslimin.'
  },
  {
    category: 'shalat',
    categoryLabel: 'Shalat',
    title: 'Amalan yang Pertama Kali Dihisab pada Hari Kiamat',
    kitabReference: 'Sunan Tirmidzi No. 413 (Kitab Ash-Shalat)',
    collection: 'Tirmidzi',
    collectionSlug: 'tirmidzi',
    number: 413,
    arab: 'إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ',
    translation: 'Sesungguhnya amalan hamba yang pertama kali akan dihisab pada hari kiamat adalah shalatnya. Jika shalatnya baik, maka sungguh ia telah beruntung dan selamat. Dan jika shalatnya rusak, maka sungguh ia telah celaka dan merugi.',
    lesson: 'Kualitas shalat menentukan keselamatan hisab seluruh amal perbuatan lainnya.'
  },
  {
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Pengampunan Dosa Bagi Orang yang Berpuasa dengan Penuh Iman',
    kitabReference: 'Shahih Bukhari No. 38 (Kitab Ash-Shiyam)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 38,
    arab: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
    translation: 'Barangsiapa berpuasa Ramadhan atas dasar iman dan mengharap pahala dari Allah, maka diampuni dosa-dosanya yang telah lalu.',
    lesson: 'Kunci diterimanya puasa adalah keikhlasan dan mengharap ridha Allah semata.'
  },
  {
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Puasa Sebagai Perisai dan Benteng dari Api Neraka',
    kitabReference: 'Shahih Bukhari No. 1894 (Kitab Ash-Shiyam)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 1894,
    arab: 'الصِّيَامُ جُنَّةٌ فَلَا يَرْفُثْ وَلَا يَجْهَلْ وَإِنْ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ إِنِّي صَائِمٌ مَرَّتَيْنِ',
    translation: 'Puasa adalah perisai. Maka janganlah berkata kotor dan jangan bertindak bodoh. Jika ada orang yang mencela atau memeranginya, hendaklah dia berkata: Sesungguhnya aku sedang berpuasa (sebanyak dua kali).',
    lesson: 'Puasa melatih pengendalian emosi, lisan, dan hawa nafsu.'
  },
  {
    category: 'puasa',
    categoryLabel: 'Puasa',
    title: 'Pintu Surga Ar-Rayyan Khusus Bagi Orang yang Berpuasa',
    kitabReference: 'Shahih Bukhari No. 1896 (Kitab Ash-Shiyam)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 1896,
    arab: 'إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ',
    translation: 'Sesungguhnya di surga ada sebuah pintu yang dinamakan Ar-Rayyan. Pada hari kiamat orang-orang yang berpuasa akan masuk melaluinya, tidak ada seorang pun selain mereka yang memasukinya.',
    lesson: 'Kemuliaan istimewa yang dipersiapkan Allah bagi hamba yang istiqamah berpuasa.'
  },
  {
    category: 'sedekah',
    categoryLabel: 'Sedekah & Zakat',
    title: 'Sedekah Tidak Mengurangi Harta Justru Menambah Kemuliaan',
    kitabReference: 'Shahih Muslim No. 2588 (Kitab Al-Birr wash-Shilah)',
    collection: 'Muslim',
    collectionSlug: 'muslim',
    number: 2588,
    arab: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ',
    translation: 'Sedekah itu tidak akan mengurangi harta, dan tidaklah Allah menambah bagi seorang hamba yang suka memaafkan kecuali kemuliaan, serta tidaklah seseorang merendahkan hati (tawadhu) karena Allah melainkan Allah akan mengangkat derajatnya.',
    lesson: 'Keberkahan harta yang disedekahkan akan senantiasa dilipatgandakan oleh Allah SWT.'
  },
  {
    category: 'sedekah',
    categoryLabel: 'Sedekah & Zakat',
    title: 'Tangan di Atas Lebih Baik daripada Tangan di Bawah',
    kitabReference: 'Shahih Bukhari No. 1429 (Kitab Az-Zakat)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 1429,
    arab: 'الْيَدُ الْعُلْيَا خَيْرٌ مِنْ الْيَدِ السُّفْلَى وَالْيَدُ الْعُلْيَا هِيَ الْمُنْفِقَةُ وَالسُّفْلَى هِيَ السَّائِلَةُ',
    translation: 'Tangan yang di atas lebih baik daripada tangan yang di bawah. Tangan yang di atas adalah yang memberi nafkah/berinfaq dan tangan yang di bawah adalah yang meminta-minta.',
    lesson: 'Anjuran menjadi pribadi dermawan yang mandiri dan gemar membantu sesama.'
  },
  {
    category: 'sedekah',
    categoryLabel: 'Sedekah & Zakat',
    title: 'Tiga Amalan yang Pahalanya Mengalir Setelah Meninggal Dunia',
    kitabReference: 'Shahih Muslim No. 1631 (Kitab Al-Wasiyyah)',
    collection: 'Muslim',
    collectionSlug: 'muslim',
    number: 1631,
    arab: 'إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
    translation: 'Apabila seorang manusia meninggal dunia, terputuslah amalnya kecuali dari tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak shalih yang mendoakannya.',
    lesson: 'Investasi akhirat terbesar yang terus mengalirkan pahala di alam kubur.'
  },
  {
    category: 'ilmu',
    categoryLabel: 'Ilmu',
    title: 'Menuntut Ilmu Dimudahkan Jalan Menuju Surga',
    kitabReference: 'Shahih Muslim No. 2699 (Kitab Adz-Dzikr wad-Dua)',
    collection: 'Muslim',
    collectionSlug: 'muslim',
    number: 2699,
    arab: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
    translation: 'Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.',
    lesson: 'Langkah kaki dalam menuntut ilmu bernilai ibadah mulia yang mengantarkan ke surga.'
  },
  {
    category: 'ilmu',
    categoryLabel: 'Ilmu',
    title: 'Menuntut Ilmu Adalah Kewajiban Bagi Setiap Muslim',
    kitabReference: 'Sunan Ibnu Majah No. 224 (Mukaddimah)',
    collection: 'Ibnu Majah',
    collectionSlug: 'ibnu-majah',
    number: 224,
    arab: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    translation: 'Menuntut ilmu itu wajib atas setiap muslim.',
    lesson: 'Kewajiban mempelajari ilmu agama agar ibadah dan muamalah sah sesuai syariat.'
  },
  {
    category: 'ilmu',
    categoryLabel: 'Ilmu',
    title: 'Orang yang Dikehendaki Kebaikan Difahamkan dalam Agama',
    kitabReference: 'Shahih Bukhari No. 71 (Kitab Al-Ilm)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 71,
    arab: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
    translation: 'Barangsiapa yang Allah kehendaki kebaikan baginya, maka Dia akan menjadikannya faham (mendalam ilmunya) dalam urusan agama.',
    lesson: 'Tanda kecintaan Allah kepada hamba adalah dibukakannya pintu pemahaman agama.'
  },
  {
    category: 'akhlak',
    categoryLabel: 'Akhlak',
    title: 'Misi Utama Pengutusan Rasulullah SAW: Menyempurnakan Akhlak',
    kitabReference: 'Musnad Ahmad No. 8952 (Kitab Al-Adab)',
    collection: 'Ahmad',
    collectionSlug: 'ahmad',
    number: 8952,
    arab: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
    translation: 'Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang mulia.',
    lesson: 'Intisari ajaran Islam tercermin pada keluhuran budi pekerti dan etika pergaulan.'
  },
  {
    category: 'akhlak',
    categoryLabel: 'Akhlak',
    title: 'Akhlak Mulia Menjadi Amalan Terberat di Timbangan Mizan',
    kitabReference: 'Sunan Tirmidzi No. 2002 (Kitab Al-Birr wash-Shilah)',
    collection: 'Tirmidzi',
    collectionSlug: 'tirmidzi',
    number: 2002,
    arab: 'مَا شَيْءٌ أَثْقَلُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ',
    translation: 'Tidak ada sesuatu pun yang lebih berat dalam timbangan (mizan) seorang mukmin pada hari kiamat selain akhlak yang baik.',
    lesson: 'Karakter mulia berbobot paling berat dalam perhitungan amal kebajikan di akhirat.'
  },
  {
    category: 'akhlak',
    categoryLabel: 'Akhlak',
    title: 'Menjaga Lisan dan Menghormati Tetangga & Tamu',
    kitabReference: 'Shahih Bukhari No. 6018 (Kitab Al-Adab)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 6018,
    arab: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ',
    translation: 'Barangsiapa beriman kepada Allah dan hari akhir, hendaklah dia berkata yang baik atau diam. Barangsiapa beriman kepada Allah dan hari akhir, janganlah menyakiti tetangganya. Dan barangsiapa beriman kepada Allah dan hari akhir, hendaklah dia memuliakan tamunya.',
    lesson: 'Standar etika sosial muslim: menjaga tutur kata, berbuat baik pada tetangga, dan memuliakan tamu.'
  },
  {
    category: 'akhlak',
    categoryLabel: 'Akhlak',
    title: 'Larangan Marah: Jangan Marah Maka Bagimu Surga',
    kitabReference: 'Shahih Bukhari No. 6116 (Kitab Al-Adab)',
    collection: 'Bukhari',
    collectionSlug: 'bukhari',
    number: 6116,
    arab: 'أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَوْصِنِي قَالَ لَا تَغْضَبْ فَرَدَّدَ مِرَارًا قَالَ لَا تَغْضَبْ',
    translation: 'Bahwa seorang laki-laki berkata kepada Nabi shallallahu ‘alaihi wasallam: "Berilah aku wasiat." Beliau bersabda: "Janganlah engkau marah." Laki-laki itu mengulangi permintaannya beberapa kali, dan Beliau tetap bersabda: "Janganlah engkau marah."',
    lesson: 'Menahan amarah adalah bukti kekuatan jiwa yang sejati.'
  }
];

export const HadisIdService = {
  async getCollections(): Promise<HadithCollectionMeta[]> {
    try {
      const res = await fetch('https://hadis-api-id.vercel.app/hadith');
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      console.error('[HadisIdService] Error getting collections:', e);
      return [];
    }
  },

  async getHadithList(collection: string, page = 1, limit = 10): Promise<HadithListResponse | null> {
    try {
      const res = await fetch(`https://hadis-api-id.vercel.app/hadith/${collection}?page=${page}&limit=${limit}`);
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      console.error(`[HadisIdService] Error getting ${collection} page ${page}:`, e);
      return null;
    }
  },

  async getHadithByNumber(collection: string, number: number): Promise<IndonesianHadithItem | null> {
    try {
      const res = await fetch(`https://hadis-api-id.vercel.app/hadith/${collection}/${number}`);
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      console.error(`[HadisIdService] Error getting ${collection} number ${number}:`, e);
      return null;
    }
  }
};
