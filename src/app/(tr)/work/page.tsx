import type { Metadata } from 'next'

import Work from '@/components/pages/work'

export const metadata: Metadata = {
  title: 'Projeler',
}

export default function Page() {
  return <Work lang="tr" />
}
