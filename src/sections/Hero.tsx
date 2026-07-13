import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { RESUME_PATHS, SOCIAL_LINKS } from '../lib/data'

export function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'pt' ? 'pt' : 'en'

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-blueprint bg-blueprint pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(224,99,42,0.12),transparent)]" />

      <div className="container-page relative py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
        >
          {t('hero.eyebrow')}
        </motion.p>

        <h1 className="font-display text-display-xl text-paper-50 text-balance">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {t('hero.title_line1')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {t('hero.title_line2')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block text-signal"
          >
            {t('hero.title_line3')}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper-200/80 text-balance"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-md bg-signal px-5 py-3 font-mono text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-signal-soft"
          >
            {t('hero.cta_contact')}
          </a>
          <a
            href={RESUME_PATHS[lang]}
            download
            className="rounded-md border border-ink-600 px-5 py-3 font-mono text-sm text-paper-100 transition-colors hover:border-ink-500 hover:bg-ink-800"
          >
            {t('hero.cta_resume')}
          </a>
          <div className="ml-1 flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-paper-200/60 underline decoration-ink-600 underline-offset-4 transition-colors hover:text-paper-50"
            >
              {t('hero.cta_github')}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-paper-200/60 underline decoration-ink-600 underline-offset-4 transition-colors hover:text-paper-50"
            >
              {t('hero.cta_linkedin')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink-700 pt-8 font-mono text-xs text-paper-200/50"
        >
          <span>{t('hero.stat_years')}</span>
          <span className="text-ink-600">/</span>
          <span>{t('hero.stat_stack')}</span>
          <span className="text-ink-600">/</span>
          <span>{t('hero.stat_focus')}</span>
        </motion.div>
      </div>
    </section>
  )
}
