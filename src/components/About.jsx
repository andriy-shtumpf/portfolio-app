import SkillSetOptimized from "./SkillSetOptimized";

const aboutItems = [
    {
        label: "Project done",
        number: 30,
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
                    {/* Unique Transparent Blurry Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Primary Glass Morphism Background */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-purple-400/3 to-emerald-400/5 
                                      backdrop-blur-[2px] rounded-[40px] border border-white/5"
                        />

                        {/* Secondary Floating Elements */}
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-400/8 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/6 rounded-full blur-lg animate-pulse delay-1000" />
                        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-emerald-400/7 rounded-full blur-md animate-pulse delay-2000" />

                        {/* Subtle Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.02]"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </div>

                    <div className="w-full h-full relative z-10 flex flex-col">
                        {/* Grid Layout: Text + Photo - Full width and full height */}
                        <div className="w-full h-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Left Content - Enhanced Text Section */}
                            <div className="h-full flex">
                                <div className="p-8 rounded-3xl md:p-12 reveal-up flex flex-col w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400/20 scrollbar-track-transparent">
                                    {/* Header Section */}
                                    <div className="mb-6 flex-shrink-0">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                                            Full Stack Engineer & AI Innovator
                                        </h2>
                                        <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"></div>
                                    </div>

                                    {/* Main Description */}
                                    <div className="space-y-4 flex-1">
                                        <p className="text-zinc-200 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                                            I specialize in{" "}
                                            <span className="text-sky-400 font-semibold">
                                                transforming legacy systems
                                            </span>{" "}
                                            into high-velocity, scalable
                                            microservice architectures. My
                                            expertise spans the complete
                                            software lifecycle—from
                                            architectural design to deployment
                                            automation.
                                        </p>

                                        <p className="text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
                                            With deep knowledge in{" "}
                                            <span className="text-purple-400 font-semibold">
                                                React, Next.js, and Spring Boot
                                            </span>
                                            , I pioneer automated CI/CD
                                            pipelines that dramatically reduce
                                            deployment times while elevating
                                            code quality. I thrive on solving
                                            complex technical challenges that
                                            deliver measurable business impact.
                                        </p>

                                        <p className="text-zinc-300 text-sm md:text-base lg:text-lg leading-relaxed">
                                            My current passion lies in the{" "}
                                            <span className="text-emerald-400 font-semibold">
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
                                        className="absolute -inset-6 bg-gradient-to-r from-sky-400/15 via-purple-400/10 to-emerald-400/15 
                                                  rounded-[90px] blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700 animate-pulse"
                                    />

                                    <div
                                        className="absolute -inset-3 bg-gradient-to-br from-sky-400/8 via-transparent to-purple-400/8 
                                                  rounded-[75px] blur-xl animate-pulse delay-500"
                                    />

                                    {/* Main Photo Container with Enhanced Glass Effect */}
                                    <figure
                                        className="relative w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] 
                                                     bg-gradient-to-t from-sky-400/20 via-sky-400/10 to-transparent 
                                                     rounded-[60px] overflow-hidden backdrop-blur-lg 
                                                     ring-2 ring-white/10 group-hover:ring-sky-400/40 
                                                     transition-all duration-700 transform group-hover:scale-[1.02]
                                                     shadow-2xl shadow-sky-400/10"
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-purple-900/10" />

                                        {/* Subtle Inner Glow */}
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[60px]" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* Stats and Logo Section */}
                        <div className="flex items-center justify-center mt-6">
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 p-6 rounded-2xl">
                                {aboutItems.map(({ label, number }, key) => (
                                    <div key={key} className="text-center">
                                        <div className="flex items-center justify-center mb-2">
                                            <span className="text-3xl font-bold md:text-5xl bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                                                {number}
                                            </span>
                                            <span className="text-sky-400 font-bold md:text-4xl ml-1">
                                                +
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 font-medium">
                                            {label}
                                        </p>
                                    </div>
                                ))}

                                <div className="flex items-center space-x-3">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-br from-sky-400/20 to-purple-400/20 rounded-xl 
                                                  flex items-center justify-center"
                                    >
                                        <img
                                            src="/images/logo.svg"
                                            alt="Logo"
                                            width={24}
                                            height={24}
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
                    <SkillSetOptimized
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
