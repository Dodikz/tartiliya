import { fetchApi } from './client';
import type { ApiResponse } from './types';

export interface AyahTafsir {
  kemenag?: {
    short?: string;
    long?: string;
  };
  quraish?: string;
  jalalayn?: string;
}

export interface AyahMeta {
  juz: number;
  page: number;
  manzil: number;
  ruku: number;
  hizb_quarter: number;
  sajda: {
    recommended: boolean;
    obligatory: boolean;
  };
}

export interface AyahData {
  id: number;
  surah_number: number;
  ayah_number: number;
  arab: string;
  translation: string;
  audio_url: string;
  image_url?: string;
  tafsir?: AyahTafsir;
  meta?: AyahMeta;
}

export interface SurahDetailData {
  number: number;
  name: string;
  name_latin: string;
  number_of_ayahs: number;
  translation: string;
  revelation: string;
  description?: string;
  audio_url?: string;
  ayahs: AyahData[];
}

export interface SurahResponseData {
  status: boolean;
  message?: string;
  data: SurahDetailData | AyahData[];
}

export const QuranService = {
  async getSurah(surahNumber: number | string): Promise<SurahResponseData> {
    const sNum = Number(surahNumber);

    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${sNum}/editions/quran-uthmani,id.indonesian`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.status === 'OK' && Array.isArray(json.data) && json.data.length >= 2) {
          const arabicAyahs = json.data[0].ayahs;
          const translationAyahs = json.data[1].ayahs;
          
          const ayahs: AyahData[] = arabicAyahs.map((a: any, i: number) => {
            let arabicText = a.text;
            if (sNum !== 1 && a.numberInSurah === 1) {
              arabicText = arabicText.replace(/^بِسْمِ\s+ٱللَّهِ\s+ٱلرَّحْمَٰنِ\s+ٱلرَّحِيمِ\s*/, '');
            }

            return {
              id: a.number,
              surah_number: sNum,
              ayah_number: a.numberInSurah,
              arab: arabicText,
              translation: translationAyahs[i]?.text || '',
              audio_url: `https://cdn.myquran.com/audio/ayah/${String(sNum).padStart(3, '0')}${String(a.numberInSurah).padStart(3, '0')}.mp3`
            };
          });

          return {
            status: true,
            message: "success",
            data: {
              number: sNum,
              name: json.data[0].englishName,
              name_latin: json.data[0].name,
              number_of_ayahs: arabicAyahs.length,
              translation: json.data[0].englishNameTranslation,
              revelation: json.data[0].revelationType,
              ayahs: ayahs
            }
          };
        }
      }
    } catch (e) {
      console.warn("[QuranService] AlQuran.cloud API fetch error, using MyQuran pagination loop fallback", e);
    }

    let allAyahs: AyahData[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore && page <= 30) {
      try {
        const pageRes = await fetchApi<SurahResponseData>(`/quran/${sNum}?page=${page}`);
        if (pageRes && pageRes.data) {
          const rawData = pageRes.data as any;
          const pageAyahs = rawData.ayahs || rawData;
          if (Array.isArray(pageAyahs) && pageAyahs.length > 0) {
            allAyahs = allAyahs.concat(pageAyahs);
            if (pageAyahs.length < 10) {
              hasMore = false;
            } else {
              page++;
            }
          } else {
            hasMore = false;
          }
        } else {
          hasMore = false;
        }
      } catch (err) {
        hasMore = false;
      }
    }

    if (sNum !== 1 && allAyahs.length > 0 && allAyahs[0].ayah_number === 1) {
      allAyahs[0].arab = allAyahs[0].arab.replace(/^بِسْمِ\s+ٱللَّهِ\s+ٱلرَّحْمَٰنِ\s+ٱلرَّحِيمِ\s*/, '');
    }

    return {
      status: true,
      message: "success",
      data: {
        number: sNum,
        name: "",
        name_latin: "",
        number_of_ayahs: allAyahs.length,
        translation: "",
        revelation: "",
        ayahs: allAyahs
      }
    };
  },

  async getAyah(surahNumber: number | string, ayahNumber: number | string): Promise<ApiResponse<AyahData>> {
    return fetchApi<ApiResponse<AyahData>>(`/quran/${surahNumber}/${ayahNumber}`);
  }
};
