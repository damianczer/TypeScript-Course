import { createContext } from 'react';
import type { Theme } from '../types/theme';

export interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
