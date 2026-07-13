import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { EXPERIENCE_KEYS } from '../lib/data'

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="border-t border-ink-700 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('experience.eyebrow')}</p>
          <h2 className="section-heading mb-16 text-balance">{t('experience.title')}</h2>
        </Reveal>

        <div className="flex flex-col">
          {EXPERIENCE_KEYS.map((key, index) => {
            const base = `experience.${key}`
            const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[]
            const tech = t(`${base}.tech`, { returnObjects: true }) as string[]

            return (
              <Reveal key={key} delay={index * 0.08}>
                <div className="grid gap-8 border-t border-ink-800 py-12 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,220px)_1fr]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-paper-200/40">
                      {t(`${base}.period`)}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-paper-50">{t(`${base}.company`)}</h3>
                    <p className="mt-1 font-mono text-sm text-signal">{t(`${base}.role`)}</p>
                  </div>

                  <div>
                    <p className="text-[17px] leading-relaxed text-paper-200/80">{t(`${base}.summary`)}</p>

                    <ul className="mt-6 flex flex-col gap-3">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-paper-200/70">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-ink-700 bg-ink-800/50 px-2.5 py-1 font-mono text-[11px] text-paper-200/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
