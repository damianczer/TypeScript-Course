export type Theme = 'light' | 'dark';

export interface ThemeColors {
    primary: string;
    primaryHover: string;
    background: string;
    surface: string;
    surfaceHover: string;
    text: string;
    textSecondary: string;
    border: string;
    shadow: string;
}

export interface ThemeConfig {
    colors: ThemeColors;
}
