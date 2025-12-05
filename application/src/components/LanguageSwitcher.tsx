import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

const LanguageSwitcherComponent = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
    }, [i18n]);

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all 
            duration-200 font-medium w-10 h-10 flex items-center justify-center text-sm"
            aria-label="Change language"
        >
            {i18n.language === 'pl' ? 'PL' : 'EN'}
        </button>
    );
};

export const LanguageSwitcher = memo(LanguageSwitcherComponent);
