const skillItem = [
    {
        imgSrc: "/images/figma.svg",
        label: "Figma",
        desc: "Design tool",
    },
    {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interaction",
    },
    {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "Web Server",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Node Framework",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "Database",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Framework",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
    },
];

const SkillSet = ({
    asSection = true,
    showHeader = true,
    gridCols = "grid-cols-4 md:grid-cols-5 lg:grid-cols-6",
    textSize = "text-md",
    descSize = "text-sm",
    centerText = false,
    className = "",
}) => {
    const content = (
        <>
            {showHeader && (
                <div className={centerText ? "text-center mb-8" : "mb-8"}>
                    <h2 className="headline-2 reveal-up">
                        Essential tools I use
                    </h2>
                    <p
                        className={`text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up ${
                            centerText ? "mx-auto" : ""
                        }`}
                    >
                        These are the tools that I use on a daily basis to
                        create and manage my projects.
                    </p>
                </div>
            )}

            <div className={`grid gap-4 ${gridCols} ${className}`}>
                {skillItem.map((item, index) => (
                    <div
                        key={index}
                        className="bg-zinc-600/30 backdrop-blur-sm ring-3 ring-zinc-50/10 p-4 
                        rounded-lg hover:bg-zinc-800/40 transition-colors group reveal-up"
                    >
                        <img
                            src={item.imgSrc}
                            alt={item.label}
                            className={`w-12 h-12 mb-2 ${
                                centerText ? "mx-auto" : ""
                            }`}
                        />
                        <h3
                            className={`${textSize} font-semibold ${
                                centerText ? "text-center" : ""
                            }`}
                        >
                            {item.label}
                        </h3>
                        <p
                            className={`${descSize} text-zinc-400 ${
                                centerText ? "text-center" : ""
                            }`}
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );

    if (asSection) {
        return (
            <section id="skills" className="section">
                <div className="container">{content}</div>
            </section>
        );
    }

    return content;
};

export default SkillSet;
