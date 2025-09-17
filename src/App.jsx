import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroPage from "./components/Hero";
import ProjectsPage from "./components/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
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
        <ThemeProvider>
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
        </ThemeProvider>
    );
};

export default App;
