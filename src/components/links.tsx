import {
  type IconType,
  SiGithub,
  SiGitlab,
  SiGmail,
  SiLinktree,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'
import { FileText } from 'lucide-react'

import type { Lang } from '@/i18n/config'
import { DICT } from '@/i18n/dictionaries'
import { BASE_PATH } from '@/lib/site'
import { buttonPrimary, pressable, surface } from '@/lib/styles'

/* E-posta adresini buradan değiştirmen yeterli. */
const EMAIL = 'selcuk.ozdemir2360@gmail.com'

/*
  CV `public/` klasöründe durur. Aynı isimle güncellediğin sürece
  siteye giden sürüm de kendiliğinden yenilenir.
*/
const CV_FILE = 'MüşerrefSelçukÖzdemirCV.pdf'
const CV_HREF = `${BASE_PATH}/${encodeURIComponent(CV_FILE)}`

const PROFILES: {
  icon: IconType
  key: keyof typeof DICT.tr.links
  href: string
}[] = [
  { icon: SiGithub, key: 'github', href: 'https://github.com/SelcukOzdemir23' },
  {
    icon: SiLinkedin,
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/muserref-selcuk-ozdemir/',
  },
  { icon: SiMedium, key: 'medium', href: 'https://medium.com/@muserrefselcuk' },
  { icon: SiGitlab, key: 'gitlab', href: 'https://gitlab.com/SelcukOzdemir23' },
  {
    icon: SiLinktree,
    key: 'linktree',
    href: 'https://linktr.ee/muserrefselcukozdemir',
  },
]

export default function Links({ lang }: { lang: Lang }) {
  const dict = DICT[lang]

  const links = [
    { icon: SiGmail, label: dict.links.email, href: `mailto:${EMAIL}` },
    ...PROFILES.map((profile) => ({
      icon: profile.icon,
      label: dict.links[profile.key],
      href: profile.href,
    })),
  ]

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <a
        className={`${buttonPrimary} inline-flex items-center gap-2`}
        href={CV_HREF}
        rel="noreferrer"
        target="_blank"
      >
        <FileText aria-hidden className="size-4" />
        {dict.links.cv}
      </a>

      {links.map(({ icon: Icon, label, href }) => {
        const isMail = href.startsWith('mailto:')

        return (
          <a
            key={href}
            className={`${surface} ${pressable} inline-flex items-center gap-2 px-3 py-1.5 font-mono text-sm`}
            href={href}
            rel={isMail ? undefined : 'noreferrer'}
            target={isMail ? undefined : '_blank'}
          >
            <Icon aria-hidden className="size-4" />
            {label}
          </a>
        )
      })}
    </div>
  )
}
