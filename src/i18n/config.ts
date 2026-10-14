/*
  Dil altyapısı.

  Türkçe kök dizinde (/), İngilizce /en altında yayınlanır. Her dilin
  kendi kök layout'u olduğu için <html lang> değeri doğru çıkar.
*/

export type Lang = 'tr' | 'en'

export const LANGS: Lang[] = ['tr', 'en']

/* İki dilde tutulan metinler. Ad, teknoloji adı ve tarih gibi
   dilden bağımsız değerler düz string kalır. */
export type LocalizedText = Record<Lang, string>

export const t = (lang: Lang, text: LocalizedText) => text[lang]

export const langPath = (lang: Lang) => (lang === 'en' ? '/en' : '')

/* İç bağlantılar için tek kaynak: ('en', '/about') -> '/en/about'. */
export const pageHref = (lang: Lang, page: string) =>
  page === '/' ? langPath(lang) || '/' : `${langPath(lang)}${page}`

export const localeTag = (lang: Lang) => (lang === 'en' ? 'en-US' : 'tr-TR')

/*
  Tarihler veride tutulur ('2024-02' veya '2025'), ekranda Intl ile
  yazılır. Bitiş tarihi null ise"devam ediyor" metni basılır.
*/
export function formatDate(lang: Lang, value: string) {
  if (/^\d{4}$/.test(value)) return value

  const [year, month] = value.split('-')

  return new Intl.DateTimeFormat(localeTag(lang), {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)))
}

export const formatRange = (
  lang: Lang,
  start: string,
  end: string | null,
  present: string,
) => `${formatDate(lang, start)} - ${end ? formatDate(lang, end) : present}`
