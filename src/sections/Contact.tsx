import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { SOCIAL_LINKS } from '../lib/data'

export function Contact() {
  const { t } = useTranslation()

  const links = [
    { label: t('contact.email_label'), value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
    { label: t('contact.linkedin_label'), value: 'in/igor-brizack', href: SOCIAL_LINKS.linkedin },
    { label: t('contact.github_label'), value: 'IgorBrizack', href: SOCIAL_LINKS.github },
  ]

  return (
    <section id="contact" className="border-t border-ink-700 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('contact.eyebrow')}</p>
          <h2 className="section-heading max-w-xl text-balance">{t('contact.title')}</h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-paper-200/70">
            {t('contact.description')}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-700 bg-ink-700 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex flex-col justify-between bg-ink-950 p-6 transition-colors hover:bg-ink-900"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-200/40">
                  {link.label}
                </span>
                <span className="mt-6 font-display text-lg text-paper-50 transition-colors group-hover:text-signal">
                  {link.value}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs text-paper-200/40">
            {t('contact.location_label')} — {t('contact.location_value')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
