import { useEffect, useState } from "react";
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import StatusBadge from "./header/StatusBadge";

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
                    <Logo />

                    {/* Navigation Menu */}
                    <Navigation
                        navOpen={navOpen}
                        handleIsOpen={handleIsOpen}
                        scrolled={scrolled}
                    />

                    {/* Theme Toggle and Status Badge */}
                    <StatusBadge />
                </div>
            </header>
        </>
    );
};

export default Header;
