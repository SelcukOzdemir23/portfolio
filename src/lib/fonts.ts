import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

/* İki dilin kök layout'u aynı font değişkenlerini kullanır. */
export const fontClassName = `${spaceGrotesk.variable} ${jetbrainsMono.variable}`
