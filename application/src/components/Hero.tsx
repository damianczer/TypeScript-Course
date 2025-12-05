import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 pb-0">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {t('hero.welcomeTitle')}
                    </h2>
                    <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                        <p>{t('hero.welcomeP1')}</p>
                        <p>{t('hero.welcomeP2')}</p>
                        <p>{t('hero.welcomeP3')}</p>
                        <p className="text-sm sm:text-base italic text-gray-600 dark:text-gray-400 pt-2">{t('hero.welcomeP4')}</p>
                    </div>
                </div>

                <div className="text-center mt-12 sm:mt-16 md:mt-20">
                    <Link to="/course">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
                            {t('hero.cta')}
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};