import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="border-t border-ink-700 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('about.eyebrow')}</p>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal delay={0.05}>
            <h2 className="section-heading text-balance">{t('about.title')}</h2>

            <div className="mt-10 flex flex-col gap-3 font-mono text-xs text-paper-200/60">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-500" />
                <span>{t('about.badge_civil')}</span>
              </div>
              <div className="ml-[3px] h-6 w-px bg-ink-700" />
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                <span className="text-signal">{t('about.badge_transition')}</span>
              </div>
              <div className="ml-[3px] h-6 w-px bg-ink-700" />
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-paper-100" />
                <span className="text-paper-100">{t('about.badge_software')}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 text-[17px] leading-relaxed text-paper-200/80">
              <p>{t('about.paragraph_1')}</p>
              <p>{t('about.paragraph_2')}</p>
              <p>{t('about.paragraph_3')}</p>
              <p className="font-mono text-sm text-paper-200/50">{t('about.paragraph_4')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
