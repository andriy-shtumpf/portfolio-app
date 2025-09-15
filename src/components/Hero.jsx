import { scrollToSectionAndUpdateNav } from "../utils/navbarUtils";
import ButtonPrimary from "./ButtonPrimary";

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
                        <div className="space-y-6">
                            <h2
                                className="headline-1 max-w-[18ch] sm:max-w-[22ch] lg:max-w-[20ch] xl:max-w-[22ch] mx-auto
                                         leading-[1.1] lg:leading-[1.05] tech-text-glow"
                            >
                                I build the mission-critical software backbone
                                for successful products.
                            </h2>

                            {/* Subtitle */}
                            <p className="text-lg text-zinc-300 max-w-[45ch] mx-auto leading-relaxed">
                                Full-stack developer specializing in scalable
                                web applications and modern tech solutions.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ButtonPrimary
                                label="Download Resume"
                                icon="download"
                            />
                            <button
                                className="btn btn-outline glow-on-hover"
                                onClick={() => {
                                    scrollToSectionAndUpdateNav("projects");
                                }}
                            >
                                <span>View Projects</span>
                                <span className="material-symbols-rounded">
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
