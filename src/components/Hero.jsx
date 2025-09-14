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

            {/* Main Content Container */}
            <div className="container relative z-10 py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
                    {/* Left Content - Text Section */}
                    <div className="lg:col-span-7 xl:col-span-6 space-y-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-3 tech-status-indicator">
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
                                className="headline-1 max-w-[18ch] sm:max-w-[22ch] lg:max-w-[16ch] xl:max-w-[18ch] 
                                         leading-[1.1] lg:leading-[1.05] tech-text-glow"
                            >
                                I build the mission-critical software backbone
                                for
                                <span className="block text-sky-400 mt-2">
                                    successful products.
                                </span>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-lg text-zinc-300 max-w-[45ch] leading-relaxed">
                                Full-stack developer specializing in scalable
                                web applications and modern tech solutions.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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

                    {/* Right Content - Enhanced Photo Section */}
                    <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Decorative Background Elements */}
                            <div
                                className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-purple-400/20 
                                          rounded-[80px] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                            />

                            <div
                                className="absolute -inset-2 bg-gradient-to-br from-sky-400/10 to-transparent 
                                          rounded-[70px] animate-pulse"
                            />

                            {/* Main Photo Container */}
                            <figure
                                className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] 
                                             bg-gradient-to-t from-sky-400/30 via-sky-400/15 to-transparent 
                                             rounded-[60px] overflow-hidden backdrop-blur-sm 
                                             ring-1 ring-white/10 group-hover:ring-sky-400/30 
                                             transition-all duration-500 transform group-hover:scale-[1.02]"
                            >
                                {/* Photo */}
                                <img
                                    src="/images/custom/personal_photo.jpg"
                                    width={650}
                                    height={800}
                                    alt="Andriy Shtumpf"
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 
                                             transition-opacity duration-500"
                                />

                                {/* Subtle Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 via-transparent to-transparent" />
                            </figure>

                            {/* Floating Tech Icons */}
                            <div
                                className="absolute -top-4 -right-4 w-12 h-12 bg-sky-400/20 rounded-full 
                                          backdrop-blur-sm flex items-center justify-center animate-spin-slow"
                            >
                                <span className="text-sky-400 text-xl">⚡</span>
                            </div>

                            <div
                                className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-400/20 rounded-full 
                                          backdrop-blur-sm flex items-center justify-center animate-pulse"
                            >
                                <span className="text-purple-400 text-2xl">
                                    🚀
                                </span>
                            </div>
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
