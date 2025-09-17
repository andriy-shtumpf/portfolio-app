const ProjectCard = ({ work, index }) => {
    return (
        <div
            key={index}
            className="relative premium-card p-6 rounded-2xl transition-all duration-300 group reveal-up"
            style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
            }}
            onMouseEnter={(e) => {
                e.target.style.borderColor = "var(--border-accent)";
                e.target.style.boxShadow = "0 15px 35px var(--shadow-accent)";
                e.target.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
                e.target.style.borderColor = "var(--border-primary)";
                e.target.style.boxShadow = "0 10px 25px var(--shadow-primary)";
                e.target.style.transform = "translateY(0)";
            }}
        >
            <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between gap-4">
                <div className="">
                    <h3
                        className="text-xl font-semibold mb-3"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {work.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-3 py-1 rounded-full text-sm font-medium border"
                                style={{
                                    backgroundColor: "var(--bg-tertiary)",
                                    color: "var(--text-secondary)",
                                    borderColor: "var(--border-secondary)",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3">
                    {/* Premium Live Project Link */}
                    {work.projectLink && (
                        <div
                            className="relative w-11 h-11 rounded-xl grid place-items-center shrink-0 transition-all duration-300 hover:scale-110 active:scale-95"
                            style={{
                                background: "var(--gradient-primary)",
                                color: "white",
                                boxShadow: "0 4px 15px var(--shadow-accent)",
                            }}
                        >
                            <span
                                className="material-symbols-rounded cursor-pointer text-lg"
                                aria-hidden="true"
                            >
                                <a
                                    href={work.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inset-0 cursor-pointer absolute"
                                    title="View Live Project"
                                ></a>
                                arrow_outward
                            </span>
                        </div>
                    )}

                    {/* Premium GitHub Link */}
                    {work.githubLink && (
                        <div
                            className="relative w-11 h-11 rounded-xl grid place-items-center shrink-0 transition-all duration-300 hover:scale-110 active:scale-95 border"
                            style={{
                                backgroundColor: "var(--bg-tertiary)",
                                color: "var(--text-primary)",
                                borderColor: "var(--border-primary)",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor =
                                    "var(--accent-primary)";
                                e.target.style.boxShadow =
                                    "0 4px 15px var(--shadow-accent)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor =
                                    "var(--border-primary)";
                                e.target.style.boxShadow = "none";
                            }}
                        >
                            <a
                                href={work.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full flex items-center justify-center"
                                title="View on GitHub"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
