/*
  next.config.mjs içindeki basePath ile aynı değeri kullanır.
  (`env` alanı üzerinden build sırasında client'a da geçer.)
*/
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/* Yayın adresi. Kendi alan adına geçersen burayı değiştir. */
export const SITE_URL = 'https://selcukozdemir23.github.io/portfolio/'
