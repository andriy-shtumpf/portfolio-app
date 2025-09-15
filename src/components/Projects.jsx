import { works } from "../utils/projects";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="container">
                <div className="flex flex-col justify-center min-h-[80vh]">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="headline-2 mb-8 reveal-up">
                            My Projects
                        </h2>
                        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] mx-auto reveal-up">
                            Here are some of the projects I have worked on. You
                            can check them out by clicking on the links below.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        {works.map((work, index) => (
                            <ProjectCard
                                key={index}
                                work={work}
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
