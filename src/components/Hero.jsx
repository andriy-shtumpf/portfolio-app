import { scrollToSectionAndUpdateNav } from "../utils/navbarUtils";
import ButtonPrimary from "./ButtonPrimary";

const HeroPage = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            id="home"
        >
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

            {/* Main Content Container - Positioned at bottom third */}
            <div className="container relative z-10 py-20 lg:py-32">
                <div className="flex flex-col justify-end min-h-[80vh]">
                    {/* Content positioned at bottom third of the page */}
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Status Badge */}
                        <div className="flex items-center justify-center gap-3 tech-status-indicator">
                            <figure className="img-box w-10 h-10 rounded-xl ring-2 ring-sky-400/30 tech-logo-container">
                                <img
                                    src="/images/custom/profile-silhouette.png"
                                    width={40}
                                    height={40}
                                    alt="My Avatar"
                                    className="img-cover"
                                />
                            </figure>

                            <div className="flex items-center gap-2 text-sm text-zinc-300 tracking-wide float-animation">
                                <span className="relative w-2.5 h-2.5 rounded-full bg-green-500 tech-glow">
                                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                                </span>
                                <span className="font-medium">
                                    Available for work
                                </span>
                            </div>
                        </div>

                        {/* Main Headline - Enhanced Positioning */}
                        <div className="space-y-6">
                            <h2
                                className="headline-1 max-w-[18ch] sm:max-w-[22ch] lg:max-w-[20ch] xl:max-w-[22ch] mx-auto
                                         leading-[1.1] lg:leading-[1.05] tech-text-glow"
                            >
                                I build the mission-critical software backbone
                                for
                                <span className="block text-sky-400 mt-2">
                                    successful products.
                                </span>
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
