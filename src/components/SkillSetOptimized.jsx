const skillItem = [
    // Core Languages
    {
        imgSrc: "/images/java.svg",
        label: "Java",
        desc: "8, 11, 17+",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "ES6+",
    },
    {
        imgSrc: "/images/python.svg",
        label: "Python",
        desc: "Programming",
    },
    {
        imgSrc: "/images/typescript.svg",
        label: "TypeScript",
        desc: "Type Safety",
    },
    {
        imgSrc: "/images/sql.svg",
        label: "SQL",
        desc: "Database",
    },

    // Backend Frameworks
    {
        imgSrc: "/images/spring.svg",
        label: "Spring Boot",
        desc: "Java Framework",
    },
    {
        imgSrc: "/images/spring-cloud.svg",
        label: "Spring Cloud",
        desc: "Microservices",
    },
    {
        imgSrc: "/images/hibernate.svg",
        label: "Hibernate",
        desc: "ORM",
    },
    {
        imgSrc: "/images/micronaut.svg",
        label: "Micronaut",
        desc: "Framework",
    },

    // Frontend
    {
        imgSrc: "/images/react.svg",
        label: "React.js",
        desc: "Frontend",
    },
    {
        imgSrc: "/images/nextjs.svg",
        label: "Next.js",
        desc: "React Framework",
    },
    {
        imgSrc: "/images/redux.svg",
        label: "Redux",
        desc: "State Management",
    },

    // Cloud Platforms
    {
        imgSrc: "/images/amazonwebservices.svg",
        label: "AWS",
        desc: "Cloud Platform",
    },
    {
        imgSrc: "/images/azure.svg",
        label: "Microsoft Azure",
        desc: "Cloud Platform",
    },

    // DevOps & Tools
    {
        imgSrc: "/images/docker.svg",
        label: "Docker",
        desc: "Containerization",
    },
    {
        imgSrc: "/images/kubernetes.svg",
        label: "Kubernetes",
        desc: "Orchestration",
    },
    {
        imgSrc: "/images/gitlab.svg",
        label: "GitLab",
        desc: "CI/CD",
    },
    {
        imgSrc: "/images/jenkins.svg",
        label: "Jenkins",
        desc: "Automation",
    },
    {
        imgSrc: "/images/terraform.svg",
        label: "Terraform",
        desc: "Infrastructure",
    },

    // Databases
    {
        imgSrc: "/images/postgresql.svg",
        label: "PostgreSQL",
        desc: "Database",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "NoSQL",
    },
    {
        imgSrc: "/images/redis.svg",
        label: "Redis",
        desc: "Caching",
    },
    {
        imgSrc: "/images/apachekafka.svg",
        label: "Apache Kafka",
        desc: "Streaming",
    },

    // Architecture
    {
        imgSrc: "/images/microservices.svg",
        label: "Microservices",
        desc: "Architecture",
    },
    {
        imgSrc: "/images/restful-apis.svg",
        label: "RESTful APIs",
        desc: "Web Services",
    },

    // Testing
    {
        imgSrc: "/images/junit.svg",
        label: "JUnit",
        desc: "Testing",
    },
    {
        imgSrc: "/images/jest.svg",
        label: "Jest",
        desc: "JS Testing",
    },

    // Development Tools
    {
        imgSrc: "/images/git.svg",
        label: "Git",
        desc: "Version Control",
    },
    {
        imgSrc: "/images/intellij.svg",
        label: "IntelliJ IDEA",
        desc: "IDE",
    },
    {
        imgSrc: "/images/vscode.svg",
        label: "VS Code",
        desc: "Editor",
    },
];

import SkillIcon from "./SkillIcon";

const SkillSetOptimized = ({
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

            <div className={`grid gap-3 ${gridCols} ${className}`}>
                {skillItem.map((item, index) => (
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
            <section id="skill" className="section">
                <div className="container">{skillSetContent}</div>
            </section>
        );
    }

    return skillSetContent;
};

export default SkillSetOptimized;
