import { useEffect, useRef } from "react";
import { updateNavbarActiveState } from "../utils/navbarUtils";

const Navbar = ({ navOpen, scrolled }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            const rect = lastActiveLink.current.getBoundingClientRect();
            const parentRect =
                lastActiveLink.current.parentElement.getBoundingClientRect();

            activeBox.current.style.top =
                lastActiveLink.current.offsetTop + "px";
            activeBox.current.style.left =
                lastActiveLink.current.offsetLeft + "px";
            activeBox.current.style.width =
                lastActiveLink.current.offsetWidth + "px";
            activeBox.current.style.height =
                lastActiveLink.current.offsetHeight + "px";
        }
    };

    useEffect(() => {
        // Multiple initialization attempts to ensure proper positioning
        const timer1 = setTimeout(initActiveBox, 50);
        const timer2 = setTimeout(initActiveBox, 200);
        const timer3 = setTimeout(initActiveBox, 500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setTimeout(initActiveBox, 50);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const activeCurrentLink = (e) => {
        e.preventDefault();

        // Get the actual link element (in case we clicked on a child element)
        const linkElement = e.currentTarget;
        const targetHref = linkElement.getAttribute("href");

        if (targetHref) {
            // Update lastActiveLink ref for internal tracking
            lastActiveLink.current = linkElement;

            // Use the utility function to handle active state and navigation
            updateNavbarActiveState(targetHref, 10);

            // Navigate to the section
            document
                .querySelector(targetHref)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        {
            label: "Home",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink,
            icon: "home",
        },
        {
            label: "About",
            link: "#about",
            className: "nav-link",
            icon: "person",
        },
        {
            label: "Skills",
            link: "#skills",
            className: "nav-link",
            icon: "code",
        },
        {
            label: "Projects",
            link: "#projects",
            className: "nav-link",
            icon: "work",
        },
        {
            label: "Reviews",
            link: "#reviews",
            className: "nav-link",
            icon: "star",
        },
        {
            label: "Contact",
            link: "#contact",
            className: "nav-link md:hidden",
            icon: "mail",
        },
    ];

    return (
        <nav
            className={`navbar ${navOpen ? "active" : ""} ${
                scrolled ? "navbar-scrolled" : ""
            }`}
        >
            {navItems.map(({ label, link, className, ref, icon }, index) => (
                <a
                    href={link}
                    key={index}
                    ref={ref}
                    className={`${className} group relative overflow-hidden`}
                    onClick={activeCurrentLink}
                >
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-rounded text-[18px] opacity-70 group-hover:opacity-100 transition-opacity md:hidden">
                            {icon}
                        </span>
                        <span className="relative z-10">{label}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
            ))}

            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

export default Navbar;
