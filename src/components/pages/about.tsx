import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import { DICT } from '@/i18n/dictionaries'
import type { Lang } from '@/i18n/config'

export default function About({ lang }: { lang: Lang }) {
  const dict = DICT[lang]

  return (
    <div>
      <h1 className="font-heading text-2xl tracking-tight sm:text-4xl">
        {dict.about.title}
      </h1>

      <div className="mt-8 max-w-[65ch] space-y-5 text-base leading-relaxed sm:text-lg">
        {dict.about.paragraphs.map((paragraph) => {
          return <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        })}
      </div>

      <div className="mt-16">
        <Skills lang={lang} />
        <Education lang={lang} />
        <Experience lang={lang} />
      </div>
    </div>
  )
}
