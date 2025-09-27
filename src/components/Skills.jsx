import SkillIcon from "./SkillIcon";
import { skillCategories } from "./skills/utils";

const Skills = ({
    asSection = true,
    showHeader = true,
    gridCols = "grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
    textSize = "text-sm",
    descSize = "text-xs",
    centerText = false,
    className = "",
}) => {
    const skillSetContent = (
        <>
            {showHeader && (
                <div className={centerText ? "text-center mb-8" : "mb-8"}>
                    <h2 className="headline-2 reveal-up">
                        Technical Expertise
                    </h2>
                    <p
                        className={`text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up ${
                            centerText ? "mx-auto" : ""
                        }`}
                    >
                        Comprehensive technology stack spanning languages,
                        frameworks, cloud platforms, and architectural patterns
                        for enterprise solutions.
                    </p>
                </div>
            )}

            <div className="space-y-8">
                {Object.entries(skillCategories).map(
                    ([categoryName, skills], categoryIndex) => (
                        <div key={categoryIndex} className="reveal-up">
                            <h3
                                className={`text-lg font-semibold text-zinc-200 mb-4 ${
                                    centerText ? "text-center" : ""
                                }`}
                            >
                                {categoryName}
                            </h3>
                            <div
                                className={`grid gap-3 ${gridCols} ${className}`}
                            >
                                {skills.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-zinc-600/30 backdrop-blur-sm ring-1 ring-zinc-50/10 p-3 
                                    rounded-lg hover:bg-zinc-800/40 transition-colors group reveal-up"
                                    >
                                        <SkillIcon
                                            src={item.imgSrc}
                                            alt={item.label}
                                            className={`w-10 h-10 mb-2 ${
                                                centerText ? "mx-auto" : ""
                                            }`}
                                            centerText={centerText}
                                        />
                                        <h4
                                            className={`${textSize} font-semibold ${
                                                centerText ? "text-center" : ""
                                            }`}
                                        >
                                            {item.label}
                                        </h4>
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
                        </div>
                    )
                )}
            </div>
        </>
    );

    if (asSection) {
        return (
            <section id="skill" className="section">
                <div className="container">{skillSetContent}</div>
            </section>
        );
    }

    return skillSetContent;
};

export default Skills;
