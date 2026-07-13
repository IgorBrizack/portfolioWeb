import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-ink-700 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-paper-200/40">{t('footer.built_with')}</p>
        <a
          href="#top"
          className="font-mono text-xs text-paper-200/40 underline decoration-ink-700 underline-offset-4 transition-colors hover:text-paper-100"
        >
          {t('footer.back_to_top')}
        </a>
      </div>
    </footer>
  )
}
