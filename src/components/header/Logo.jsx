const Logo = () => {
    return (
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
                        e.target.style.borderColor = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.borderColor = "var(--border-primary)";
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
                            backgroundColor: "var(--accent-primary)",
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
                            backgroundColor: "var(--accent-secondary)",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Logo;
