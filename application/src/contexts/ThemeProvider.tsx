import { useEffect, useMemo, useCallback, useState, type ReactNode } from 'react';
import type { Theme } from '../types/theme';
import { useLocalStorage } from '../hooks/useStorage';
import { THEME_STORAGE_KEY } from '../config/theme.config';
import { ThemeContext } from './ThemeContext';

const TRANSITION_DELAY = 200;
const TRANSITION_DURATION = 400;

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useLocalStorage<Theme>(THEME_STORAGE_KEY, 'dark');
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setTheme((prev) => prev === 'light' ? 'dark' : 'light');
            setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
        }, TRANSITION_DELAY);
    }, [setTheme]);

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
            setTheme,
            isDark: theme === 'dark',
        }),
        [theme, toggleTheme, setTheme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {isTransitioning && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 
                flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4
                     border-gray-300 dark:border-gray-700 border-t-blue-600 dark:border-t-blue-400"></div>
                </div>
            )}
            {children}
        </ThemeContext.Provider>
    );
}
