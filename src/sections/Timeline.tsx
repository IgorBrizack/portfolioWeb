import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { TIMELINE_KEYS } from '../lib/data'

export function Timeline() {
  const { t } = useTranslation()

  return (
    <section className="border-t border-ink-700 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('timeline.eyebrow')}</p>
          <h2 className="section-heading mb-16 text-balance">{t('timeline.title')}</h2>
        </Reveal>

        <div className="relative pl-8">
          <div className="absolute bottom-0 left-[3px] top-2 w-px bg-ink-700" />

          <div className="flex flex-col gap-12">
            {TIMELINE_KEYS.map((key, index) => {
              const base = `timeline.items.${key}`
              const isLast = index === TIMELINE_KEYS.length - 1

              return (
                <Reveal key={`${key}-${index}`} delay={index * 0.08}>
                  <div className="relative">
                    <span
                      className={`absolute -left-[35px] top-1.5 h-[7px] w-[7px] rounded-full ${
                        isLast ? 'bg-signal' : 'bg-paper-200/50'
                      }`}
                    />
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-paper-200/40">
                      {t(`${base}.period`)}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-paper-50">{t(`${base}.title`)}</h3>
                    <p className="mt-0.5 font-mono text-sm text-signal">{t(`${base}.place`)}</p>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper-200/70">
                      {t(`${base}.description`)}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
