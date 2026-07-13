import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useDocumentMeta() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.resolvedLanguage === 'pt' ? 'pt-BR' : 'en'
    document.documentElement.lang = lang
    document.title = t('meta.title')

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t('meta.description'))

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', t('meta.description'))

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'))
  }, [i18n.resolvedLanguage, t])
}
