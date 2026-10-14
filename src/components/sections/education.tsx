import EDUCATION from '@/data/education'

import Section from '@/components/section'
import { formatRange, t, type Lang } from '@/i18n/config'
import { DICT } from '@/i18n/dictionaries'
import { meta } from '@/lib/styles'

export default function Education({ lang }: { lang: Lang }) {
  const dict = DICT[lang]

  return (
    <Section title={dict.about.education}>
      <div className="space-y-8">
        {EDUCATION.map((item) => {
          return (
            <div key={`${item.school}-${item.program.en}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-base sm:text-lg">
                  {item.school}
                </h3>

                <p className={meta}>
                  {formatRange(
                    lang,
                    item.startDate,
                    item.endDate,
                    dict.present,
                  )}
                </p>
              </div>

              <p className="mt-1 text-sm sm:text-base">
                {t(lang, item.program)}
              </p>

              <p className={`${meta} mt-1`}>{t(lang, item.note)}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
