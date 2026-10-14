import type { LocalizedText } from '@/i18n/config'

/* Eğitim bilgileri CV'den alındı. */
export type Education = {
  school: string
  program: LocalizedText
  startDate: string
  endDate: string | null
  note: LocalizedText
}

const EDUCATION: Education[] = [
  {
    school: 'Fırat Üniversitesi',
    program: {
      tr: 'Yapay Zekâ, yüksek lisans',
      en: 'Artificial Intelligence, master’s degree',
    },
    startDate: '2024-10',
    endDate: null,
    note: { tr: 'Elazığ', en: 'Elazığ, Türkiye' },
  },
  {
    school: 'Fırat Üniversitesi',
    program: {
      tr: 'Yazılım Mühendisliği, lisans',
      en: 'Software Engineering, bachelor’s degree',
    },
    startDate: '2019-08',
    endDate: '2024-07',
    note: { tr: 'Ortalama 3.65 / 4.00, Elazığ', en: 'GPA 3.65 / 4.00, Elazığ' },
  },
  {
    school: 'Wyższa Szkoła Technologii Informatycznych',
    program: {
      tr: 'Erasmus+ değişim programı (ikinci dönem)',
      en: 'Erasmus+ exchange programme (second term)',
    },
    startDate: '2024-02',
    endDate: '2024-07',
    note: { tr: 'Katowice, Polonya', en: 'Katowice, Poland' },
  },
  {
    school: 'Wyższa Szkoła Technologii Informatycznych',
    program: {
      tr: 'Erasmus+ değişim programı',
      en: 'Erasmus+ exchange programme',
    },
    startDate: '2023-02',
    endDate: '2023-07',
    note: { tr: 'Katowice, Polonya', en: 'Katowice, Poland' },
  },
]

export default EDUCATION
