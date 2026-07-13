import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { HIGHLIGHT_KEYS } from '../lib/data'

export function Highlights() {
  const { t } = useTranslation()

  return (
    <section className="border-t border-ink-700 bg-ink-900/40 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('highlights.eyebrow')}</p>
          <h2 className="section-heading mb-16 max-w-2xl text-balance">{t('highlights.title')}</h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-lg border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHT_KEYS.map((key, index) => (
            <Reveal key={key} delay={(index % 4) * 0.05} className="h-full">
              <div className="flex h-full flex-col bg-ink-950 p-6">
                <span className="font-mono text-xs text-ink-500">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg text-paper-50">
                  {t(`highlights.items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-200/60">
                  {t(`highlights.items.${key}.description`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
