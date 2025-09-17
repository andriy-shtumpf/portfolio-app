import AboutItem from "./AboutItem";
import Skills from "./Skills";

const aboutItems = [
    {
        label: "Projects done",
        number: 20,
        description: "(6 Enterprise-level)",
    },
    {
        label: "Years of experience",
        number: 7,
    },
];

const AboutPage = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col py-20">
            <div className="container flex-1 flex flex-col">
                {/* Main About Content - Takes up 70% of the space */}
                <div className="flex-[0.7] flex items-center justify-center relative mb-8">
                    {/* Premium Glass Morphism Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Primary Premium Background */}
                        <div
                            className="absolute inset-0 backdrop-blur-[2px]"
                            style={{
                                background: "var(--bg-glass)",
                                borderColor: "var(--border-primary)",
                            }}
                        />

                        {/* Theme-aware Floating Elements */}
                        <div
                            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-xl animate-pulse"
                            style={{
                                backgroundColor: "var(--accent-primary)",
                                opacity: 0.12,
                            }}
                        />
                        <div
                            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full blur-lg animate-pulse delay-1000"
                            style={{
                                backgroundColor: "var(--accent-secondary)",
                                opacity: 0.1,
                            }}
                        />
                        <div
                            className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full blur-md animate-pulse delay-2000"
                            style={{
                                backgroundColor: "var(--accent-tertiary)",
                                opacity: 0.15,
                            }}
                        />

                        {/* Premium Grid Pattern */}
                        <div className="absolute inset-0 bg-tech-grid opacity-10" />
                    </div>

                    <div className="w-full h-full relative z-10 flex flex-col">
                        {/* Grid Layout: Text + Photo - Full width and full height */}
                        <div className="w-full h-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Left Content - Enhanced Text Section */}
                            <div className="h-full flex">
                                <div className="p-8 rounded-3xl md:p-12 reveal-up flex flex-col w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400/20 scrollbar-track-transparent">
                                    {/* Header Section */}
                                    <div className="mb-6 flex-shrink-0">
                                        <h2
                                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight"
                                            style={{
                                                color: "var(--text-primary)",
                                            }}
                                        >
                                            Full Stack Engineer & AI Innovator
                                        </h2>
                                        <div
                                            className="w-16 h-1 rounded-full"
                                            style={{
                                                background:
                                                    "var(--gradient-accent)",
                                            }}
                                        ></div>
                                    </div>

                                    {/* Main Description */}
                                    <div className="space-y-4 flex-1">
                                        <p
                                            className="text-base md:text-lg lg:text-xl leading-relaxed font-medium"
                                            style={{
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            I specialize in{" "}
                                            <span
                                                className="font-semibold"
                                                style={{
                                                    color: "var(--accent-primary)",
                                                }}
                                            >
                                                transforming legacy systems
                                            </span>{" "}
                                            into high-velocity, scalable
                                            microservice architectures. My
                                            expertise spans the complete
                                            software lifecycle—from
                                            architectural design to deployment
                                            automation.
                                        </p>

                                        <p
                                            className="text-sm md:text-base lg:text-lg leading-relaxed"
                                            style={{
                                                color: "var(--text-tertiary)",
                                            }}
                                        >
                                            With deep knowledge in{" "}
                                            <span
                                                className="font-semibold"
                                                style={{
                                                    color: "var(--accent-secondary)",
                                                }}
                                            >
                                                React, Next.js, and Spring Boot
                                            </span>
                                            , I pioneer automated CI/CD
                                            pipelines that dramatically reduce
                                            deployment times while elevating
                                            code quality. I thrive on solving
                                            complex technical challenges that
                                            deliver measurable business impact.
                                        </p>

                                        <p
                                            className="text-sm md:text-base lg:text-lg leading-relaxed"
                                            style={{
                                                color: "var(--text-tertiary)",
                                            }}
                                        >
                                            My current passion lies in the{" "}
                                            <span
                                                className="font-semibold"
                                                style={{
                                                    color: "var(--accent-tertiary)",
                                                }}
                                            >
                                                AI frontier
                                            </span>
                                            —leveraging multimodal LLMs and
                                            intelligent agents to create
                                            automated data processing workflows.
                                            As a polyglot fluent in five
                                            languages, I excel at fostering
                                            global collaboration and mentoring
                                            teams.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Enhanced Photo Section */}
                            <div className="h-full flex justify-center lg:justify-end items-start">
                                <div className="relative group w-full h-full flex items-start justify-center pt-8 md:pt-12">
                                    {/* Enhanced Decorative Background Elements */}
                                    <div
                                        className="absolute -inset-6 rounded-[90px] blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700 animate-pulse"
                                        style={{
                                            background: `linear-gradient(135deg, 
                                                var(--accent-primary) 0%, 
                                                var(--accent-secondary) 50%, 
                                                var(--accent-tertiary) 100%)`,
                                            opacity: 0.08,
                                        }}
                                    />

                                    <div
                                        className="absolute -inset-3 rounded-[75px] blur-xl animate-pulse delay-500"
                                        style={{
                                            background: `linear-gradient(135deg, 
                                                var(--accent-primary) 0%, 
                                                transparent 50%, 
                                                var(--accent-secondary) 100%)`,
                                            opacity: 0.06,
                                        }}
                                    />

                                    {/* Main Photo Container with Enhanced Glass Effect */}
                                    <figure
                                        className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] 
                                                     rounded-[60px] overflow-hidden backdrop-blur-lg 
                                                     ring-2 transition-all duration-700 transform group-hover:scale-[1.02]
                                                     shadow-2xl"
                                        style={{
                                            background: `linear-gradient(to top, 
                                                var(--accent-primary) 0%, 
                                                var(--accent-secondary) 50%, 
                                                transparent 100%)`,
                                            backgroundOpacity: 0.1,
                                            ringColor: "var(--border-primary)",
                                            boxShadow: `0 25px 50px -12px var(--shadow-accent)`,
                                        }}
                                    >
                                        {/* Photo */}
                                        <img
                                            src="/images/custom/personal_photo.jpg"
                                            width={650}
                                            height={800}
                                            alt="Andriy Shtumpf"
                                            className="w-full h-auto opacity-90 group-hover:opacity-100 
                                                     transition-opacity duration-700"
                                        />

                                        {/* Enhanced Overlay Gradient */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(to top, 
                                                    var(--bg-primary) 0%, 
                                                    transparent 50%, 
                                                    var(--bg-secondary) 100%)`,
                                                opacity: 0.3,
                                            }}
                                        />

                                        {/* Subtle Inner Glow */}
                                        <div
                                            className="absolute inset-0 ring-1 ring-inset rounded-[60px]"
                                            style={{
                                                ringColor:
                                                    "var(--border-primary)",
                                            }}
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* Stats and Logo Section */}
                        <div className="flex items-center justify-center mt-6">
                            <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12 p-6 rounded-2xl">
                                {aboutItems.map((item, key) => (
                                    <AboutItem
                                        key={key}
                                        label={item.label}
                                        number={item.number}
                                        description={item.description}
                                    />
                                ))}

                                <div className="flex items-center space-x-3">
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, 
                                                var(--accent-primary) 0%, 
                                                var(--accent-secondary) 100%)`,
                                            opacity: 0.15,
                                        }}
                                    >
                                        <img
                                            src="/images/custom/logo/logo-classic.png"
                                            alt="Logo"
                                            width={32}
                                            height={32}
                                            className="opacity-80"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section - Takes up remaining space */}
                <div className="flex-[0.3] flex flex-col justify-start pt-8">
                    <Skills
                        asSection={false}
                        showHeader={true}
                        gridCols="grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10"
                        textSize="text-sm"
                        descSize="text-xs"
                        centerText={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
