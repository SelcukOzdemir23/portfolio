import type { Metadata } from 'next'

import About from '@/components/pages/about'

export const metadata: Metadata = {
  title: 'Hakkımda',
}

export default function Page() {
  return <About lang="tr" />
}
