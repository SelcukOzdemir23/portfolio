import { ProjectCard, ProjectRow } from '@/components/project'
import Section from '@/components/section'
import { DATA_PROJECTS, FEATURED_PROJECTS, WEB_PROJECTS } from '@/data/projects'
import { DICT } from '@/i18n/dictionaries'
import type { Lang } from '@/i18n/config'
import { meta } from '@/lib/styles'

export default function Work({ lang }: { lang: Lang }) {
  const dict = DICT[lang]

  return (
    <div>
      <h1 className="font-heading text-2xl tracking-tight sm:text-4xl">
        {dict.work.title}
      </h1>

      <p className="mt-4 max-w-[65ch] text-base leading-relaxed sm:text-lg">
        {dict.work.lead}
      </p>

      <div className="mt-12">
        <Section title={dict.work.featured}>
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((project) => {
              return (
                <ProjectCard
                  key={project.name.en}
                  lang={lang}
                  project={project}
                />
              )
            })}
          </div>
        </Section>

        <Section title={dict.work.others}>
          <div className="space-y-10">
            <div>
              <h3 className={meta}>{dict.work.webGroup}</h3>

              <div className="mt-2">
                {WEB_PROJECTS.map((project) => {
                  return (
                    <ProjectRow
                      key={project.name.en}
                      lang={lang}
                      project={project}
                    />
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className={meta}>{dict.work.dataGroup}</h3>

              <div className="mt-2">
                {DATA_PROJECTS.map((project) => {
                  return (
                    <ProjectRow
                      key={project.name.en}
                      lang={lang}
                      project={project}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
