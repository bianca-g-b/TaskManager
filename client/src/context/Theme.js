import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleTheme() {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
        setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    }

    return (
        <ThemeContext.Provider value={{theme, isDarkMode, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
