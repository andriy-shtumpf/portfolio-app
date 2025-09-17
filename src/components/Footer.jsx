const sitemap = [
    {
        label: "Home",
        link: "#home",
    },
    {
        label: "About",
        link: "#about",
    },
    {
        label: "Projects",
        link: "#projects",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/andriy-shtumpf/portfolio-app",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/andriy-shtumpf",
    },
];

const Footer = () => {
    return (
        <footer className="text-zinc-300 py-10">
            <div className="container bg-zinc-800/20 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="headline-2 mb-4">Andriy</h2>
                    <p className="text-zinc-400 text-center max-w-[600px]">
                        A passionate web developer with a focus on creating
                        modern, user-friendly websites and applications.
                    </p>
                </div>
                <nav className="mb-8">
                    <ul className="flex flex-wrap justify-center gap-6">
                        {sitemap.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-zinc-300 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex justify-center gap-6 mb-8">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white transition-colors"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
                <p className="text-zinc-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} Andriy Shtumpf. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
