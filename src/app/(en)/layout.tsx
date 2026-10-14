import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'

import '../globals.css'
import Shell from '@/components/shell'
import { fontClassName } from '@/lib/fonts'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Müşerref Selçuk Özdemir',
    template: '%s | Müşerref Selçuk Özdemir',
  },
  description:
    'AI developer and data scientist candidate. I work on TÜBİTAK funded research and build AI and data driven applications.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Müşerref Selçuk Özdemir',
    title: 'Müşerref Selçuk Özdemir',
    description:
      'AI developer and data scientist candidate. I work on TÜBİTAK funded research and build AI and data driven applications.',
  },
}

/* İngilizce kök layout: sayfalar /en altında yayınlanır. */
export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en" className={fontClassName} suppressHydrationWarning>
        <body>
          <Shell lang="en">{children}</Shell>
        </body>
      </html>
    </ViewTransitions>
  )
}
