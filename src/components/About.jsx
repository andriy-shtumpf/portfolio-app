import SkillSet from "./SkillSet";

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
                {/* Main About Content - Takes up 2/3 of the space */}
                <div className="flex-1 flex items-center justify-center min-h-[60vh]">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                        {/* Left Content - Text Section */}
                        <div className="lg:col-span-7 xl:col-span-6">
                            <div className="bg-zinc-800/30 backdrop-blur-sm p-7 rounded-2xl md:p-12 reveal-up">
                                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                                    Welcome! I&apos;m Henry, a professional web
                                    developer with a knack for crafting visually
                                    stunning and highly functional websites.
                                    Combining creativity and technical
                                    expertise. I transform your vision into
                                    digital masterpiece that excels in both
                                    appearance and performance.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                                    {aboutItems.map(
                                        ({ label, number }, key) => (
                                            <div key={key}>
                                                <div className="flex items-center md:mb-2">
                                                    <span className="text-2xl font-bold md:text-4xl">
                                                        {number}
                                                    </span>
                                                    <span className="text-sky-400 font-semibold md:text-3xl">
                                                        +
                                                    </span>
                                                </div>

                                                <p className="text-sm text-zinc-400">
                                                    {label}
                                                </p>
                                            </div>
                                        )
                                    )}

                                    <img
                                        src="/images/logo.svg"
                                        alt="Logo"
                                        width={30}
                                        height={30}
                                        className="ml-auto md:w-[40px] md:h-[40px]"
                                    />
                                </div>
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
                                    <span className="text-sky-400 text-xl">
                                        ⚡
                                    </span>
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

                {/* Skills Section - Takes up 1/3 of the space at the bottom */}
                <div className="min-h-[30vh] flex flex-col justify-center">
                    <SkillSet
                        asSection={false}
                        showHeader={true}
                        gridCols="grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-8"
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
