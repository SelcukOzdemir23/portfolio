import type { Metadata } from 'next'

import About from '@/components/pages/about'

export const metadata: Metadata = {
  title: 'About',
}

export default function Page() {
  return <About lang="en" />
}
