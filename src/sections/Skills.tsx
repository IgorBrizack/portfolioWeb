import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { SKILLS, type SkillCategory } from '../lib/data'

const ORDER: SkillCategory[] = [
  'backend',
  'languages',
  'cloud',
  'architecture',
  'databases',
  'observability',
  'frontend',
]

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="border-t border-ink-700 py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{t('skills.eyebrow')}</p>
          <h2 className="section-heading mb-16 text-balance">{t('skills.title')}</h2>
        </Reveal>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ORDER.map((category, index) => (
            <Reveal key={category} delay={(index % 3) * 0.06}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-paper-200/40">
                {t(`skills.categories.${category}`)}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 border-l border-ink-700 pl-4">
                {SKILLS[category].map((skill) => (
                  <li key={skill} className="text-[15px] text-paper-100">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
