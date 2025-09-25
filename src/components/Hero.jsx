import { useNavigate } from "react-router-dom";

const HeroPage = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen overflow-hidden" id="home">
            {/* Premium Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-tech-grid" />

                {/* Premium Mesh Background */}
                <div className="absolute inset-0 tech-mesh-bg" />

                {/* Premium Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom right, transparent 0%, transparent 70%, var(--bg-secondary) 100%)",
                        opacity: 0.3,
                    }}
                />
            </div>

            {/* Main Content Container - Positioned at bottom third */}
            <div className="container relative z-10 py-20 lg:py-32 flex items-center justify-center min-h-screen">
                <div className="flex flex-col justify-end min-h-[80vh]">
                    {/* Content positioned at bottom third of the page */}
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Main Headline - Premium Design */}
                        <div
                            className="space-y-8 p-8 rounded-3xl"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.01)",
                                backdropFilter: "blur(60px)",
                                WebkitBackdropFilter: "blur(60px)",
                                boxShadow: "none",
                            }}
                        >
                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-[20ch] sm:max-w-[25ch] lg:max-w-[30ch] mx-auto
                                         leading-[1.1] lg:leading-[1.05] tech-text-glow"
                                style={{
                                    color: "var(--text-primary)",
                                    background: "var(--gradient-primary)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                I build mission-critical software backbone for
                                <span
                                    className="block mt-2"
                                    style={{
                                        background: "var(--gradient-accent)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    successful products.
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p
                                className="text-lg sm:text-xl max-w-[40ch] mx-auto leading-relaxed font-medium"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Full-stack developer specializing in
                                <span
                                    className="font-semibold"
                                    style={{ color: "var(--accent-emerald)" }}
                                >
                                    {" "}
                                    scalable web applications
                                </span>{" "}
                                and
                                <span
                                    className="font-semibold"
                                    style={{ color: "var(--accent-gold)" }}
                                >
                                    {" "}
                                    modern tech solutions.
                                </span>
                            </p>
                        </div>

                        {/* Premium CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                className="px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-xl transition-all duration-300 
                                         hover:scale-105 active:scale-95 text-sm sm:text-base
                                         flex items-center gap-2 shadow-xl backdrop-blur-sm"
                                style={{
                                    background: "var(--gradient-primary)",
                                    color: "white",
                                    boxShadow:
                                        "0 10px 25px var(--shadow-accent), 0 0 0 1px var(--border-accent)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow =
                                        "0 15px 35px var(--shadow-accent), 0 0 0 1px var(--accent-primary)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow =
                                        "0 10px 25px var(--shadow-accent), 0 0 0 1px var(--border-accent)";
                                }}
                                onClick={() => navigate("/resume")}
                            >
                                <span className="material-symbols-rounded text-lg">
                                    download
                                </span>
                                <span>Download Resume</span>
                            </button>
                            <button
                                className="px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-xl transition-all duration-300
                                         hover:scale-105 active:scale-95 text-sm sm:text-base
                                         flex items-center gap-2 backdrop-blur-sm border-2"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    color: "var(--text-primary)",
                                    borderColor: "var(--border-accent)",
                                    boxShadow:
                                        "0 10px 25px var(--shadow-primary)",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor =
                                        "var(--bg-tertiary)";
                                    e.target.style.borderColor =
                                        "var(--accent-primary)";
                                    e.target.style.boxShadow =
                                        "0 15px 35px var(--shadow-accent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor =
                                        "var(--bg-card)";
                                    e.target.style.borderColor =
                                        "var(--border-accent)";
                                    e.target.style.boxShadow =
                                        "0 10px 25px var(--shadow-primary)";
                                }}
                                onClick={() => navigate("/references")}
                            >
                                <span className="material-symbols-rounded text-lg">
                                    folder_open
                                </span>
                                <span>View References</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div
                    className="flex flex-col items-center gap-3 animate-bounce"
                    style={{ color: "var(--text-tertiary)" }}
                >
                    <span className="text-xs font-semibold tracking-widest uppercase">
                        Scroll
                    </span>
                    <div
                        className="w-0.5 h-12 rounded-full"
                        style={{
                            background: `linear-gradient(to bottom, var(--accent-primary), transparent)`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
