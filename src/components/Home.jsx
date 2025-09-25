import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import AboutPage from "./About";
import ContactPage from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HeroPage from "./Hero";
import ProjectsPage from "./Projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up");

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-20 bottom",
                    end: "bottom 80%",
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            });
        });
    });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <HeroPage />
                <AboutPage />
                {/* <SkillSet /> */}
                <ProjectsPage />
                <ContactPage />
                <Footer />
            </main>
        </ReactLenis>
    );
};

export default Home;
