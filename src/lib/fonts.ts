import { JetBrains_Mono, Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

/* İki dilin kök layout'u aynı font değişkenlerini kullanır. */
export const fontClassName = `${outfit.variable} ${jetbrainsMono.variable}`
