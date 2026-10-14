import SKILLS from '@/data/skills'

import Section from '@/components/section'
import { t, type Lang } from '@/i18n/config'
import { DICT } from '@/i18n/dictionaries'
import { chip, meta } from '@/lib/styles'

export default function Skills({ lang }: { lang: Lang }) {
  return (
    <Section title={DICT[lang].about.skills}>
      <div className="space-y-8">
        {SKILLS.map(({ field, skills }) => {
          return (
            <div key={field.en}>
              <h3 className={meta}>{t(lang, field)}</h3>

              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map(({ skill, icon: Icon }) => {
                  return (
                    <li className={chip} key={skill}>
                      {Icon && <Icon aria-hidden className="size-4" />}
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
