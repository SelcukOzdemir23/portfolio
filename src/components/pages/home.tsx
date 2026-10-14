import Links from '@/components/links'
import { ProjectCard } from '@/components/project'
import Section from '@/components/section'
import { FEATURED_PROJECTS } from '@/data/projects'
import { DICT } from '@/i18n/dictionaries'
import { pageHref, type Lang } from '@/i18n/config'
import { inlineLink } from '@/lib/styles'
import { Link } from 'next-view-transitions'

export default function Home({ lang }: { lang: Lang }) {
  const dict = DICT[lang]

  return (
    <div>
      <section className="mb-20">
        <p className="text-muted-foreground font-mono text-xs">
          {dict.home.role}
        </p>

        <h1 className="font-heading mt-4 text-3xl leading-[1.05] tracking-tight sm:text-5xl">
          Müşerref Selçuk Özdemir
        </h1>

        <p className="mt-6 max-w-[62ch] text-base leading-relaxed sm:text-lg">
          {dict.home.intro}
        </p>

        <Links lang={lang} />
      </section>

      <Section
        aside={
          <Link
            className={`font-mono text-xs ${inlineLink}`}
            href={pageHref(lang, '/work')}
          >
            {dict.home.all}
          </Link>
        }
        title={dict.home.featured}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURED_PROJECTS.slice(0, 4).map((project) => {
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
    </div>
  )
}
