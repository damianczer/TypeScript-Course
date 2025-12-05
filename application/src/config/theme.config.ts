import type { Theme, ThemeConfig } from '../types/theme';

export const THEME_STORAGE_KEY = 'ts-course-theme' as const;

export const lightTheme: ThemeConfig = {
    colors: {
        primary: '#3178C6',
        primaryHover: '#235A97',
        background: '#FFFFFF',
        surface: '#F5F5F5',
        surfaceHover: '#E8E8E8',
        text: '#1E1E1E',
        textSecondary: '#6B6B6B',
        border: '#D4D4D4',
        shadow: 'rgba(0, 0, 0, 0.1)',
    },
};

export const darkTheme: ThemeConfig = {
    colors: {
        primary: '#3178C6',
        primaryHover: '#4C9AFF',
        background: '#1E1E1E',
        surface: '#252526',
        surfaceHover: '#2D2D30',
        text: '#D4D4D4',
        textSecondary: '#858585',
        border: '#3E3E42',
        shadow: 'rgba(0, 0, 0, 0.4)',
    },
};

export const themes: Record<Theme, ThemeConfig> = {
    light: lightTheme,
    dark: darkTheme,
};

export const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

export const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark';

    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }
    } catch (error) {
        console.warn('Failed to read theme from localStorage:', error);
    }

    return getSystemTheme();
};
