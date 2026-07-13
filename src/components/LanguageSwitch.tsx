import { useTranslation } from 'react-i18next'

export function LanguageSwitch({ className }: { className?: string }) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage === 'pt' ? 'pt' : 'en'

  function toggle() {
    i18n.changeLanguage(current === 'en' ? 'pt' : 'en')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className={`group relative flex h-8 items-center rounded-full border border-ink-600 bg-ink-800/60 px-1 font-mono text-[11px] tracking-wide text-paper-200 transition-colors hover:border-ink-500 ${className ?? ''}`}
    >
      <span className="relative z-10 flex items-center gap-1 px-2 py-1">
        <span className={current === 'en' ? 'text-paper-50' : 'text-paper-200/40'}>EN</span>
        <span className="text-paper-200/30">/</span>
        <span className={current === 'pt' ? 'text-paper-50' : 'text-paper-200/40'}>PT</span>
      </span>
    </button>
  )
}
