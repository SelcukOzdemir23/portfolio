import type { LocalizedText } from '@/i18n/config'

/* İş deneyimi CV'deki sırayla, güncelden eskiye.
   Bitiş tarihi null ise "devam ediyor" olarak yazılır. */
export type Role = {
  company: LocalizedText
  role: LocalizedText
  description: LocalizedText
  startDate: string
  endDate: string | null
}

const PAST_ROLES: Role[] = [
  {
    company: { tr: 'TÜBİTAK 1002-A', en: 'TÜBİTAK 1002-A' },
    role: { tr: 'Bursiyer Araştırmacı', en: 'Project Bursary Researcher' },
    description: {
      tr: 'Süper kapasitör literatürünü tarayan LLM ve RAG tabanlı sistemde veri işleme ve model hattının geliştirilmesine destek veriyorum.',
      en: 'Supporting the data processing and model pipeline of an LLM and RAG based system that scans supercapacitor literature.',
    },
    startDate: '2025',
    endDate: null,
  },
  {
    company: { tr: 'Serbest çalışma', en: 'Self-employed' },
    role: { tr: 'Yapay Zekâ Geliştiricisi', en: 'AI Developer' },
    description: {
      tr: 'Freelance müşteriler için yapay zekâ destekli çözümler geliştiriyor, yapay zekâ ve veri bilimi alanındaki girişim fırsatlarını araştırıyorum.',
      en: 'Building AI powered solutions for freelance clients and exploring startup opportunities in AI and data science.',
    },
    startDate: '2025-05',
    endDate: null,
  },
  {
    company: { tr: 'Kodland', en: 'Kodland' },
    role: { tr: 'Çevirmen', en: 'Translator' },
    description: {
      tr: 'Kodland’ın eğitim içeriklerini Türkçeye çevirdim ve uyarladım.',
      en: 'Translated and adapted Kodland’s educational content into Turkish.',
    },
    startDate: '2024-07',
    endDate: '2025-05',
  },
  {
    company: { tr: 'Kodland', en: 'Kodland' },
    role: { tr: 'Eğitmen', en: 'Tutor' },
    description: {
      tr: '10-17 yaş arası öğrencilere Python dersleri verdim.',
      en: 'Taught Python to students aged 10-17 in structured, interactive lessons.',
    },
    startDate: '2024-02',
    endDate: '2025-02',
  },
  {
    company: { tr: 'FLO', en: 'FLO' },
    role: { tr: 'Stajyer', en: 'Intern' },
    description: {
      tr: 'Şirket içindeki farklı departmanları ve iş süreçlerini inceledim.',
      en: 'Explored different departments and business operations inside FLO.',
    },
    startDate: '2023-08',
    endDate: '2023-09',
  },
  {
    company: { tr: 'Medium', en: 'Medium' },
    role: { tr: 'İçerik Üreticisi', en: 'Content Writer' },
    description: {
      tr: 'Kitap, teknoloji, yazılım ve kişisel deneyimler üzerine yazılar yazıyorum.',
      en: 'Writing articles about books, technology, software and personal experiences.',
    },
    startDate: '2022-10',
    endDate: null,
  },
]

export default PAST_ROLES
