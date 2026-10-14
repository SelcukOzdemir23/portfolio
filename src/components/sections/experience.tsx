import PAST_ROLES from '@/data/experience'

import Section from '@/components/section'
import { formatRange, t, type Lang } from '@/i18n/config'
import { DICT } from '@/i18n/dictionaries'
import { meta } from '@/lib/styles'

export default function Experience({ lang }: { lang: Lang }) {
  const dict = DICT[lang]

  return (
    <Section title={dict.about.experience}>
      <div className="space-y-8">
        {PAST_ROLES.map((role) => {
          return (
            <div key={`${role.company.en}-${role.role.en}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-base sm:text-lg">
                  {t(lang, role.role)}, {t(lang, role.company)}
                </h3>

                <p className={meta}>
                  {formatRange(
                    lang,
                    role.startDate,
                    role.endDate,
                    dict.present,
                  )}
                </p>
              </div>

              <p className="mt-2 text-sm leading-relaxed sm:text-base">
                {t(lang, role.description)}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
