import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('Информация о сайте')}
        </div>
    );
};

export default AboutPage;
