import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { WORK_KEYS } from '../lib/data'

const LABELS = {
  en: { goal: 'Goal', challenge: 'Challenge', impact: 'Impact' },
  pt: { goal: 'Objetivo', challenge: 'Desafio', impact: 'Impacto' },
}

export function Work() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'pt' ? 'pt' : 'en'
  const labels = LABELS[lang]

  return (
    <section id="work" className="border-t border-ink-700 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('work.eyebrow')}</p>
          <h2 className="section-heading text-balance">{t('work.title')}</h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-paper-200/70">{t('work.subtitle')}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6">
          {WORK_KEYS.map((key, index) => {
            const base = `work.items.${key}`
            const tech = t(`${base}.tech`, { returnObjects: true }) as string[]

            return (
              <Reveal key={key} delay={index * 0.08}>
                <article className="group rounded-lg border border-ink-700 p-8 transition-colors hover:border-ink-500 hover:bg-ink-900/40 md:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-display text-2xl text-paper-50">{t(`${base}.title`)}</h3>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
                      {t(`${base}.role`)}
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-paper-200/75">
                    {t(`${base}.description`)}
                  </p>

                  <div className="mt-8 grid gap-6 border-t border-ink-800 pt-6 sm:grid-cols-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-200/40">
                        {labels.goal}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-paper-200/70">{t(`${base}.goal`)}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-200/40">
                        {labels.challenge}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-paper-200/70">{t(`${base}.challenge`)}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-200/40">
                        {labels.impact}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-paper-200/70">{t(`${base}.impact`)}</p>
                    </div>
                  </div>

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
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
