import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="bg-[#007acc] text-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition">
                    <img src="/typescript-white.svg" alt="TypeScript" className="h-7 w-7 sm:h-8 sm:w-8" />
                    <span className="text-base sm:text-lg font-semibold">{t('site.title')}</span>
                </Link>

                <div className="flex items-center gap-3 sm:gap-8">
                    <Link to="/course" className="hidden sm:block hover:text-blue-200 transition">
                        {t('nav.course')}
                    </Link>
                    <Link to="/about" className="hidden sm:block hover:text-blue-200 transition">
                        {t('nav.about')}
                    </Link>

                    <div className="flex items-center gap-2 sm:gap-3 sm:ml-6 sm:pl-6 sm:border-l sm:border-white/30">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 text-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-center">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                    {t('hero.title')}
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                    {t('hero.subtitle')}
                </p>
            </div>
        </header>
    );
};