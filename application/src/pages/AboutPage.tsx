import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('pages.aboutTitle')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('pages.aboutContent')}
        </p>
      </div>
    </div>
  );
};