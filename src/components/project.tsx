import type { Project } from '@/data/projects'
import { t, type Lang } from '@/i18n/config'
import { DICT } from '@/i18n/dictionaries'
import { button, buttonPrimary, chip, meta, surface } from '@/lib/styles'

function ProjectLinks({
  project,
  lang,
  className,
}: {
  project: Project
  lang: Lang
  className?: string
}) {
  const dict = DICT[lang]

  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ''}`}>
      {project.liveLink && (
        <a
          className={buttonPrimary}
          href={project.liveLink}
          rel="noreferrer"
          target="_blank"
        >
          {dict.project.live}
        </a>
      )}

      {project.repoUrl && (
        <a
          className={button}
          href={project.repoUrl}
          rel="noreferrer"
          target="_blank"
        >
          {dict.project.repo}
        </a>
      )}
    </div>
  )
}

function Stack({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => {
        return (
          <li className={chip} key={item}>
            {item}
          </li>
        )
      })}
    </ul>
  )
}

/* Öne çıkan projeler: geniş kart, açıklama ve bağlantılar. */
export function ProjectCard({
  project,
  lang,
}: {
  project: Project
  lang: Lang
}) {
  return (
    <article className={`${surface} shadow-shadow flex h-full flex-col p-5`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="font-heading text-lg sm:text-xl">
          {t(lang, project.name)}
        </h3>

        <p className={meta}>{project.year}</p>
      </div>

      {project.note && (
        <p className={`${meta} mt-1.5`}>{t(lang, project.note)}</p>
      )}

      <p className="mt-3 text-sm leading-relaxed sm:text-base">
        {t(lang, project.summary)}
      </p>

      <div className="mt-4">
        <Stack stack={project.stack} />
      </div>

      <ProjectLinks className="mt-auto pt-5" lang={lang} project={project} />
    </article>
  )
}

/* Diğer projeler: tek satırlık, yoğun liste. */
export function ProjectRow({
  project,
  lang,
}: {
  project: Project
  lang: Lang
}) {
  return (
    <article className="border-border flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b-2 py-5 last:border-b-0">
      <div className="max-w-[48ch]">
        <div className="flex items-baseline gap-3">
          <h4 className="font-heading text-base sm:text-lg">
            {t(lang, project.name)}
          </h4>

          <p className={meta}>{project.year}</p>
        </div>

        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {t(lang, project.summary)}
        </p>

        <p className={`${meta} mt-2`}>{project.stack.join(', ')}</p>
      </div>

      <ProjectLinks lang={lang} project={project} />
    </article>
  )
}
