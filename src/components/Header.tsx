import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from './LanguageSwitch'

const SECTIONS = ['about', 'experience', 'skills', 'work', 'contact'] as const

export function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) setMenuOpen(false)
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-ink-700 bg-ink-950/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-paper-50">
          IB<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="font-mono text-[13px] tracking-wide text-paper-200/70 transition-colors hover:text-paper-50"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-paper-50 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-ink-700 bg-ink-950 px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {SECTIONS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink-800 py-3 font-mono text-sm text-paper-200"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
          <div className="mt-5">
            <LanguageSwitch />
          </div>
        </div>
      )}
    </header>
  )
}
