import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <Link to="/course">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700
                         text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform 
                         hover:-translate-y-1 transition inline-flex items-center gap-3 text-lg">
                            {t('hero.cta')}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md 
                    hover:shadow-lg transition-all text-center border border-gray-200 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100
                         dark:bg-blue-900/50 rounded-xl mb-4">
                            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                            {t('hero.feature1Title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t('hero.feature1Desc')}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md 
                    hover:shadow-lg transition-all text-center border border-gray-200 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100
                         dark:bg-blue-900/50 rounded-xl mb-4">
                            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                            {t('hero.feature2Title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t('hero.feature2Desc')}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md 
                    hover:shadow-lg transition-all text-center border border-gray-200 dark:border-gray-700">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100
                         dark:bg-blue-900/50 rounded-xl mb-4">
                            <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                            {t('hero.feature3Title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t('hero.feature3Desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};