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
        // Check localStorage first - user's explicit choice takes priority
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
            return savedTheme;
        }

        // Default to dark mode and save it to localStorage
        localStorage.setItem("portfolio-theme", "dark");
        return "dark";
    });

    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem("portfolio-theme", theme);

        // Apply theme to document immediately
        document.documentElement.setAttribute("data-theme", theme);

        // Update body class for immediate styling
        document.body.className =
            theme === "dark" ? "theme-dark" : "theme-light";

        // Force a repaint to ensure theme is applied
        document.body.style.display = "none";
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = "";
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
