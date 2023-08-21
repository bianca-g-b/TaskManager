import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleTheme() {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
        setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    }

    //add className to html element whenever the theme is dark and remove it when theme gets light again
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("html-dark");
        } else {
            document.documentElement.classList.remove("html-dark");
        }
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, isDarkMode, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
