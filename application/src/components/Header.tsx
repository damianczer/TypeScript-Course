import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="bg-[#007acc] text-white">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
                    <img src="/typescript-white.svg" alt="TypeScript" className="h-8 w-8" />
                    <span className="text-lg font-semibold">{t('site.title')}</span>
                </Link>

                <div className="flex items-center gap-8">
                    <Link to="/course" className="hover:text-blue-200 transition">
                        {t('nav.course')}
                    </Link>
                    <Link to="/about" className="hover:text-blue-200 transition">
                        {t('nav.about')}
                    </Link>

                    <div className="flex items-center gap-3 ml-6 pl-6 border-l border-white/30">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                    {t('hero.title')}
                </h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    {t('hero.subtitle')}
                </p>
            </div>
        </header>
    );
};

