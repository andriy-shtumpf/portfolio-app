import { projects } from "../utils/projects";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="container">
                <div className="flex flex-col justify-center min-h-[80vh]">
                    {/* Premium Header Section */}
                    <div className="text-center mb-12">
                        <h2
                            className="headline-2 mb-8 reveal-up text-gradient-primary"
                            style={{
                                background: "var(--gradient-primary)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            My Projects
                        </h2>
                        <p
                            className="mt-3 mb-8 max-w-[50ch] mx-auto reveal-up text-lg"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            Here are some of the projects I have worked on. You
                            can check them out by clicking on the links below.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
