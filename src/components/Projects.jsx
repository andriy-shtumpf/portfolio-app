const works = [
    {
        imgSrc: "/images/project-1.jpg",
        title: "Full stack music app",
        tags: ["API", "MVC", "Development"],
        projectLink: "https://musify-5al0.onrender.com/",
    },
    {
        imgSrc: "/images/project-2.jpg",
        title: "Free stock photo app",
        tags: ["API", "SPA"],
        projectLink: "https://pixstock-official.vercel.app/",
    },
    {
        imgSrc: "/images/project-3.jpg",
        title: "Recipe app",
        tags: ["Development", "API"],
        projectLink: "",
    },
    {
        imgSrc: "/images/project-4.jpg",
        title: "Real state website",
        tags: ["Web-design", "Development"],
        projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
    {
        imgSrc: "/images/project-5.jpg",
        title: "eCommerce website",
        tags: ["eCommerce", "Development"],
        projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    },
    {
        imgSrc: "/images/project-6.jpg",
        title: "vCard Personal portfolio",
        tags: ["Web-design", "Development"],
        projectLink:
            "https://github.com/codewithsadee/vcard-personal-portfolio",
    },
];

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
                            <div
                                key={index}
                                className="relative bg-zinc-600/30 backdrop-blur-sm ring-3 ring-inset ring-zinc-50/10 p-4 rounded-lg hover:bg-zinc-800/40 
                                transition-colors group active:bg-zinc-700/40 reveal-up"
                            >
                                <img
                                    src={work.imgSrc}
                                    alt={work.title}
                                    className="w-full h-[200px] object-cover rounded-lg mb-4"
                                />
                                <div className="flex items-center justify-between gap-4">
                                    <div className="">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {work.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {work.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                                        <span
                                            className="material-symbols-rounded cursor-pointer"
                                            aria-hidden="true"
                                        >
                                            <a
                                                href={work.projectLink}
                                                target="_blank"
                                                className="inset-0 cursor-pointer absolute"
                                            ></a>
                                            arrow_outward
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
