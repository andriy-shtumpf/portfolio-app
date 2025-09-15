import { scrollToSectionAndUpdateNav } from "../utils/navbarUtils";

const HeroPage = () => {
    return (
        <section className="relative min-h-screen overflow-hidden" id="home">
            {/* Enhanced Background with Multiple Layers */}
            <div className="absolute inset-0 z-0">
                {/* Primary Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage:
                            "url('/images/custom/profile-silhouette5.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundAttachment: "fixed",
                    }}
                />

                {/* Gradient Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />

                {/* Tech Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-tech-grid opacity-20" />

                {/* Subtle Animated Mesh Background */}
                <div className="absolute inset-0 tech-mesh-bg opacity-30" />
            </div>

            {/* Status Badge - Positioned to match Header logo */}
            <div className="absolute top-28 left-0 right-0 z-30">
                <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6">
                    <div className="flex justify-start">
                        <div className="flex items-center gap-3 tech-status-indicator">
                            <figure className="img-box w-12 h-12 sm:w-14 sm:h-14 rounded-xl ring-2 ring-sky-400/30 tech-logo-container">
                                <img
                                    src="/images/custom/profile-silhouette.png"
                                    width={56}
                                    height={56}
                                    alt="My Avatar"
                                    className="img-cover"
                                />
                            </figure>

                            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl text-zinc-300 tracking-wide float-animation">
                                <span className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-green-500 tech-glow">
                                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                                </span>
                                <span className="font-medium">
                                    Available for work
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container - Positioned at bottom third */}
            <div className="container relative z-10 py-20 lg:py-32 flex items-center justify-center min-h-screen">
                <div className="flex flex-col justify-end min-h-[80vh]">
                    {/* Content positioned at bottom third of the page */}
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Main Headline - Enhanced Positioning */}
                        <div className="space-y-6 backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10">
                            <h2
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[25ch] sm:max-w-[30ch] lg:max-w-[35ch] xl:max-w-[40ch] mx-auto
                                         leading-[1.1] lg:leading-[1.05] text-white/90 tech-text-glow backdrop-blur-sm"
                            >
                                I build mission-critical software backbone for
                                <span className="text-sky-400/90 tech-text-glow">
                                    {" "}
                                    successful products.
                                </span>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-base text-zinc-200/80 max-w-[45ch] mx-auto leading-relaxed font-medium backdrop-blur-sm">
                                Full-stack developer specializing in
                                <span className="text-sky-300/90">
                                    {" "}
                                    scalable web applications
                                </span>{" "}
                                and
                                <span className="text-sky-300/90">
                                    {" "}
                                    modern tech solutions.
                                </span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                            <button
                                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-8 xl:py-4 
                                             bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 
                                             text-white font-semibold rounded-lg transition-all duration-300 
                                             shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-105
                                             text-xs sm:text-xs md:text-xs lg:text-xs xl:text-base
                                             flex items-center gap-2 tech-glow border border-sky-400/30"
                            >
                                <span className="material-symbols-rounded text-base">
                                    download
                                </span>
                                <span>Download Resume</span>
                            </button>
                            <button
                                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-8 xl:py-4
                                         border-2 border-sky-400/50 text-sky-300 hover:text-white hover:bg-sky-400/10
                                         font-semibold rounded-lg transition-all duration-300
                                         text-xs sm:text-xs md:text-xs lg:text-xs xl:text-base
                                         flex items-center gap-2 hover:border-sky-300 hover:scale-105 tech-glow"
                                onClick={() => {
                                    scrollToSectionAndUpdateNav("projects");
                                }}
                            >
                                <span>View Projects</span>
                                <span className="material-symbols-rounded text-base">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col items-center gap-2 text-zinc-400 animate-bounce">
                    <span className="text-xs font-medium tracking-wider">
                        SCROLL
                    </span>
                    <div className="w-px h-8 bg-gradient-to-b from-zinc-400 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
