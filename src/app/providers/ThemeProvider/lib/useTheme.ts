/* eslint-disable indent */
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let toggledTheme: Theme;

        switch(theme) {
            case Theme.LIGHT: {
                toggledTheme = Theme.DARK;
                break;
            }
            case Theme.DARK: {
                toggledTheme = Theme.ORANGE;
                break;
            }
            case Theme.ORANGE: {
                toggledTheme = Theme.LIGHT;
                break;
            }
            default: {
                toggledTheme = Theme.LIGHT
            }
        }
        setTheme?.(toggledTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, toggledTheme)
    }

    return { theme, toggleTheme };
}
