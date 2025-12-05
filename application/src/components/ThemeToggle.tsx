import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { useState, useCallback, memo } from 'react';

const ANIMATION_DURATION = 600;

const ThemeToggleComponent = () => {
    const { toggleTheme, isDark } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = useCallback(() => {
        setIsAnimating(true);
        toggleTheme();
        setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
    }, [toggleTheme]);

    return (
        <button
            onClick={handleClick}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 
            transition-all duration-200 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <div className={`transition-all duration-300 ${isAnimating ? 'rotate-180 scale-75' : 'rotate-0 scale-100'
                }`}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </div>
        </button>
    );
};

export const ThemeToggle = memo(ThemeToggleComponent);
