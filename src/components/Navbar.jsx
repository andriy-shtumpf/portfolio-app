import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateNavbarActiveState } from "../utils/navbarUtils";
import NavItem from "./navbar/NavItem";

const Navbar = ({ navOpen, scrolled }) => {
    const navigate = useNavigate();
    const location = useLocation();
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

    const activeCurrentLink = (e, isRoute = false) => {
        e.preventDefault();

        // Get the actual link element (in case we clicked on a child element)
        const linkElement = e.currentTarget;
        const targetHref = linkElement.getAttribute("href");

        if (targetHref) {
            // Update lastActiveLink ref for internal tracking
            lastActiveLink.current = linkElement;

            // Check if it's a route navigation (starts with /) or anchor link (starts with #)
            if (isRoute || targetHref.startsWith("/")) {
                // Navigate to the route
                navigate(targetHref);
            } else {
                // Use the utility function to handle active state and navigation
                updateNavbarActiveState(targetHref, 10);

                // Navigate to the section
                document
                    .querySelector(targetHref)
                    ?.scrollIntoView({ behavior: "smooth" });
            }
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
            label: "Resume",
            link: "/resume",
            className: "nav-link",
            icon: "description",
            isRoute: true,
        },
        {
            label: "References",
            link: "/references",
            className: "nav-link",
            icon: "star",
            isRoute: true,
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
            {navItems.map(
                ({ label, link, className, ref, icon, isRoute }, index) => (
                    <NavItem
                        key={index}
                        label={label}
                        link={link}
                        className={className}
                        ref={ref}
                        icon={icon}
                        onClick={(e) => activeCurrentLink(e, isRoute)}
                    />
                )
            )}

            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

export default Navbar;
