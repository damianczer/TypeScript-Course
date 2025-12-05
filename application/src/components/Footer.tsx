import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6 sm:mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/typescript.svg" alt="TypeScript" className="h-6 w-6" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('site.title')}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('footer.navigation')}</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600
                 dark:hover:text-blue-400 transition">
                  {t('nav.home')}
                </Link>
                <Link to="/course" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600
                 dark:hover:text-blue-400 transition">
                  {t('nav.course')}
                </Link>
                <Link to="/about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600
                 dark:hover:text-blue-400 transition">
                  {t('nav.about')}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.contact')}</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/damianczer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600
                   dark:hover:text-blue-400 transition"
                >
                  <Github className="w-4 h-4" />
                  {t('footer.github')}
                </a>
                <a
                  href="mailto:kontakt@damianczerwinski.pl"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600
                   dark:hover:text-blue-400 transition"
                >
                  <Mail className="w-4 h-4" />
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row 
        justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          <p>Copyright © {currentYear} {t('site.title')}. {t('footer.copyright')}</p>
          <p>
            {t('footer.author')}:{' '}
            <a
              href="https://www.damianczerwinski.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Damian Czerwiński
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};