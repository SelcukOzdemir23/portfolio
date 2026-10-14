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
    'Yapay zekâ geliştiricisi ve veri bilimci adayı. TÜBİTAK destekli projelerde çalışıyor, yapay zekâ ve veri odaklı uygulamalar geliştiriyorum.',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Müşerref Selçuk Özdemir',
    title: 'Müşerref Selçuk Özdemir',
    description:
      'Yapay zekâ geliştiricisi ve veri bilimci adayı. TÜBİTAK destekli projelerde çalışıyor, yapay zekâ ve veri odaklı uygulamalar geliştiriyorum.',
  },
}

/* Türkçe kök layout: site kök dizinde (/) yayınlanır. */
export default function TurkishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="tr" className={fontClassName} suppressHydrationWarning>
        <body>
          <Shell lang="tr">{children}</Shell>
        </body>
      </html>
    </ViewTransitions>
  )
}
