import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import type { Lang } from '@/i18n/config'

/* İki dilin kök layout'u bu iskeleti paylaşır. */
export default function Shell({
  lang,
  children,
}: {
  lang: Lang
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Nav lang={lang} />
      <div className="mx-auto w-full max-w-[820px] px-5 pt-24 pb-16 sm:pb-24">
        {children}
      </div>
    </ThemeProvider>
  )
}
