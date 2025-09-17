import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleIsOpen = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;

            setScrolled(scrollTop > 10); // Start transparency effect earlier
            setScrollProgress(scrollPercent);
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Premium Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 w-full h-1 z-50 force-fixed transition-all duration-700 ease-out"
                style={{
                    backgroundColor: scrolled
                        ? "var(--bg-secondary)"
                        : "var(--bg-tertiary)",
                }}
            >
                <div
                    className="h-full transition-all duration-300 ease-out"
                    style={{
                        width: `${scrollProgress * 100}%`,
                        background: "var(--gradient-primary)",
                        boxShadow: "0 0 10px var(--shadow-accent)",
                    }}
                />
            </div>

            {/* Premium Dynamic Background Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-20 z-30 pointer-events-none force-fixed transition-opacity duration-700 ease-out
                    ${scrolled ? "opacity-20" : "opacity-40"}`}
                style={{
                    background: `radial-gradient(800px circle at ${
                        mousePosition.x
                    }px ${mousePosition.y}px, var(--accent-primary)${
                        scrolled ? "10" : "20"
                    }, transparent 50%)`,
                }}
            />

            <header
                className={`fixed top-0 left-0 w-full h-20 flex items-center z-50 transition-all duration-700 ease-out tech-header force-fixed
                    ${scrolled ? "scrolled" : ""}`}
                style={{
                    backgroundColor: scrolled
                        ? "var(--bg-overlay)"
                        : "var(--bg-glass)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderBottom: scrolled
                        ? `1px solid var(--border-accent)`
                        : "1px solid transparent",
                    boxShadow: scrolled
                        ? `0 4px 20px var(--shadow-primary)`
                        : "none",
                }}
            >
                <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                    {/* Premium Logo with Brand Name */}
                    <div className="flex items-center gap-4 group">
                        <div className="relative">
                            {/* Premium Glow Effects */}
                            <div className="absolute inset-0 rounded-xl">
                                <div
                                    className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
                                    style={{
                                        background: "var(--gradient-primary)",
                                        opacity: 0.2,
                                    }}
                                ></div>
                                <div
                                    className="absolute inset-0 border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"
                                    style={{
                                        borderColor: "var(--accent-primary)",
                                    }}
                                ></div>
                            </div>

                            <a
                                href="/"
                                className="logo relative block w-14 h-14 p-1 rounded-xl border transition-all duration-500 hover:scale-110 tech-logo-container"
                                style={{
                                    background: "var(--gradient-secondary)",
                                    borderColor: "var(--border-primary)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.borderColor =
                                        "var(--accent-primary)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.borderColor =
                                        "var(--border-primary)";
                                }}
                            >
                                <img
                                    src="/images/custom/logo/logo-classic.png"
                                    alt="logo"
                                    className="relative z-10 filter brightness-110 w-full h-full object-cover rounded-lg"
                                />
                                {/* Premium Grid Overlay */}
                                <div className="absolute inset-0 bg-tech-grid rounded-xl"></div>
                            </a>
                        </div>

                        <div className="hidden sm:block">
                            <h1
                                className="text-lg font-bold bg-clip-text text-transparent tech-text-glow"
                                style={{
                                    background: "var(--gradient-primary)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Portfolio
                            </h1>
                            <div className="flex items-center gap-2 -mt-1">
                                <div
                                    className="w-1 h-1 rounded-full animate-pulse"
                                    style={{
                                        backgroundColor:
                                            "var(--accent-primary)",
                                    }}
                                ></div>
                                <p
                                    className="text-xs font-mono tracking-wider"
                                    style={{ color: "var(--text-tertiary)" }}
                                >
                                    DEVELOPER
                                </p>
                                <div
                                    className="w-1 h-1 rounded-full animate-pulse delay-75"
                                    style={{
                                        backgroundColor:
                                            "var(--accent-secondary)",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="relative md:justify-self-center flex items-center gap-3">
                        {/* Menu Button */}
                        <button className="menu-btn" onClick={handleIsOpen}>
                            <span className="material-symbols-rounded">
                                {navOpen ? "close" : "menu"}
                            </span>
                        </button>
                        <Navbar navOpen={navOpen} scrolled={scrolled} />
                    </div>

                    {/* Theme Toggle and Status Badge */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Theme Toggle Button - Outside overflow container */}
                        <ThemeToggle />

                        {/* Status Badge */}
                        <div className="flex items-center gap-3 tech-status-indicator">
                            <figure className="w-10 h-10 rounded-xl overflow-hidden p-1">
                                <img
                                    src="/images/custom/profile.jpg"
                                    width={40}
                                    height={40}
                                    alt="My Avatar"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </figure>

                            <div
                                className="flex items-center gap-2 text-sm tracking-wide float-animation"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <span className="relative w-3 h-3 rounded-full bg-green-500 tech-glow">
                                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                                </span>
                                <span className="font-medium">
                                    Available for work
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
