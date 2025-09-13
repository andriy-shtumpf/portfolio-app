import { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
            {/* Scroll Progress Bar */}
            <div
                className={`fixed top-0 left-0 w-full h-1 z-50 force-fixed transition-all duration-700 ease-out
                ${scrolled ? "bg-zinc-950/20" : "bg-zinc-950/50"}`}
            >
                <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 ease-out tech-glow"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            {/* Dynamic Background Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-20 z-30 pointer-events-none tech-mesh-bg force-fixed transition-opacity duration-700 ease-out
                    ${scrolled ? "opacity-30" : "opacity-100"}`}
                style={{
                    background: `radial-gradient(600px circle at ${
                        mousePosition.x
                    }px ${mousePosition.y}px, rgba(14, 165, 233, ${
                        scrolled ? 0.02 : 0.05
                    }), transparent 40%)`,
                }}
            />

            <header
                className={`fixed top-0 left-0 w-full h-20 flex items-center z-50 transition-all duration-700 ease-out tech-header force-fixed
                    ${scrolled ? "scrolled" : ""}
                    ${
                        scrolled
                            ? "bg-zinc-950/20 backdrop-blur-2xl border-b border-cyan-400/10 shadow-lg shadow-cyan-500/5"
                            : "bg-gradient-to-b from-zinc-950/70 via-zinc-900/50 to-transparent backdrop-blur-xl"
                    }`}
            >
                <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                    {/* Tech-Enhanced Logo with Brand Name */}
                    <div className="flex items-center gap-4 group">
                        <div className="relative">
                            {/* Animated Tech Rings */}
                            <div className="absolute inset-0 rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                <div className="absolute inset-0 border border-cyan-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
                            </div>

                            <a
                                href="/"
                                className="logo relative block p-3 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 tech-logo-container"
                            >
                                <img
                                    src="/images/logo.svg"
                                    width={28}
                                    height={28}
                                    alt="logo"
                                    className="relative z-10 filter brightness-110"
                                />
                                {/* Tech Grid Overlay */}
                                <div className="absolute inset-0 bg-tech-grid opacity-20 rounded-xl"></div>
                            </a>
                        </div>

                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent tech-text-glow">
                                Portfolio
                            </h1>
                            <div className="flex items-center gap-2 -mt-1">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                                <p className="text-xs text-zinc-400 font-mono tracking-wider">
                                    DEVELOPER
                                </p>
                                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="relative md:justify-self-center">
                        <button className="menu-btn" onClick={handleIsOpen}>
                            <span className="material-symbols-rounded">
                                {navOpen ? "close" : "menu"}
                            </span>
                        </button>
                        <Navbar navOpen={navOpen} scrolled={scrolled} />
                    </div>

                    {/* Tech-Enhanced CTA Section */}
                    <div className="flex items-center gap-4">
                        {/* Advanced Status Indicator */}
                        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-400/30 backdrop-blur-sm tech-status-indicator">
                            <div className="relative">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-xs text-emerald-300 font-mono tracking-wide">
                                ONLINE
                            </span>
                            <div className="w-px h-3 bg-emerald-400/30"></div>
                            <span className="text-xs text-zinc-400 font-mono">
                                24/7
                            </span>
                        </div>

                        {/* Futuristic CTA Button */}
                        <a
                            href="#contact"
                            className="btn btn-secondary group relative overflow-hidden tech-cta-button"
                        >
                            {/* Animated Background Layers */}
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>

                            {/* Tech Grid Pattern */}
                            <div className="absolute inset-0 bg-tech-grid opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Button Content */}
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-medium">
                                CONNECT
                            </span>
                            <span className="material-symbols-rounded text-[16px] ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 relative z-10">
                                arrow_forward
                            </span>

                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line transition-opacity duration-300"></div>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
