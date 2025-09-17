import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) {
            return savedTheme;
        }

        // Check system preference
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: light)").matches
        ) {
            return "light";
        }

        return "dark";
    });

    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem("portfolio-theme", theme);

        // Apply theme to document
        document.documentElement.setAttribute("data-theme", theme);

        // Update body class for immediate styling
        document.body.className =
            theme === "dark" ? "theme-dark" : "theme-light";
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === "dark",
        isLight: theme === "light",
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
