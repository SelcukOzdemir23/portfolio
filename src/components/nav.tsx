'use client'

import clsx from 'clsx'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

import { ThemeSwitcher } from './theme-switcher'
import { langPath, pageHref, type Lang } from '@/i18n/config'
import { DICT } from '@/i18n/dictionaries'
import { BASE_PATH } from '@/lib/site'

/*
  basePath (GitHub Pages) ve dil önekini ayıklayıp aktif sekmeyi
  bulur. Örnek: '/portfolio/en/about/' -> '/about'
*/
function currentPage(path: string, lang: Lang) {
  let rest = path

  if (BASE_PATH && rest.startsWith(BASE_PATH)) {
    rest = rest.slice(BASE_PATH.length)
  }

  const prefix = langPath(lang)

  if (prefix && rest.startsWith(prefix)) {
    rest = rest.slice(prefix.length)
  }

  rest = rest.replace(/\/+$/, '')

  return rest === '' ? '/' : rest
}

export default function Nav({ lang }: { lang: Lang }) {
  const path = usePathname() ?? '/'
  const dict = DICT[lang]
  const active = currentPage(path, lang)
  const other: Lang = lang === 'tr' ? 'en' : 'tr'

  const links = [
    { page: '/', label: dict.nav.home },
    { page: '/about', label: dict.nav.about },
    { page: '/work', label: dict.nav.work },
  ]

  return (
    <div className="fixed top-4 left-0 z-50 w-full px-4">
      <nav className="border-border rounded-base bg-main text-main-foreground shadow-shadow mx-auto flex w-max items-center gap-1 border-2 p-1.5 font-mono text-sm">
        {links.map((link) => {
          return (
            <Link
              key={link.page}
              className={clsx(
                'rounded-base px-3 py-1.5 transition-colors',
                active === link.page
                  ? 'bg-main-foreground text-main'
                  : 'hover:bg-main-foreground/15',
              )}
              href={pageHref(lang, link.page)}
            >
              {link.label}
            </Link>
          )
        })}
        <Link
          aria-label={dict.nav.language}
          className="rounded-base hover:bg-main-foreground/15 px-3 py-1.5 transition-colors"
          href={pageHref(other, active)}
        >
          {other}
        </Link>
        <ThemeSwitcher label={dict.nav.theme} />
      </nav>
    </div>
  )
}
