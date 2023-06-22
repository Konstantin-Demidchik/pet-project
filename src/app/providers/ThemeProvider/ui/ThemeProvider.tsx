import { type FC, useState, useMemo, useEffect } from 'react'
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
