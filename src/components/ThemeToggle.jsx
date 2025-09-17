import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="group relative overflow-hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
                backgroundColor: "var(--bg-glass)",
                border: "1px solid var(--border-accent)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 4px 20px var(--shadow-accent)";
                e.target.style.borderColor = "var(--accent-primary)";
            }}
            onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.borderColor = "var(--border-accent)";
            }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
            {/* Classic blue background effects */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{
                    background: "var(--gradient-primary)",
                    opacity: 0.1,
                }}
            ></div>

            {/* Premium grid pattern */}
            <div className="absolute inset-0 bg-tech-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>

            {/* Sun icon for light theme */}
            <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isDark
                        ? "opacity-0 rotate-180 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                }`}
            >
                <span
                    className="material-symbols-rounded text-[20px] transition-colors duration-300"
                    style={{
                        color: "var(--accent-secondary)",
                    }}
                >
                    light_mode
                </span>
            </div>

            {/* Moon icon for dark theme */}
            <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    isDark
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-180 scale-50"
                }`}
            >
                <span
                    className="material-symbols-rounded text-[20px] transition-colors duration-300"
                    style={{
                        color: "var(--accent-primary)",
                    }}
                >
                    dark_mode
                </span>
            </div>

            {/* Premium scanning line effect */}
            <div
                className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 group-hover:animate-scan-line transition-opacity duration-300"
                style={{
                    background: `linear-gradient(to right, transparent, var(--accent-primary), transparent)`,
                }}
            ></div>
        </button>
    );
};

export default ThemeToggle;
