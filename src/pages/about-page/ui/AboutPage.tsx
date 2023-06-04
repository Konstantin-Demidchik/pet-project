import { useTranslation } from 'react-i18next'

const AboutPage = () => {
    const { t } = useTranslation('about')
    return <div>
        {t('Title')}
        {t('Title123213123')}
    </div>
}

export default AboutPage
