import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const reviews = [
    {
        content:
            "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
        name: "Sophia Ramirez",
        imgSrc: "/images/people-1.jpg",
        company: "PixelForge",
    },
    {
        content:
            "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
        name: "Ethan Caldwell",
        imgSrc: "/images/people-2.jpg",
        company: "NexaWave",
    },
    {
        content:
            "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
        name: "Liam Bennett",
        imgSrc: "/images/people-3.jpg",
        company: "CodeCraft",
    },
    {
        content:
            "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
        name: "Noah Williams",
        imgSrc: "/images/people-4.jpg",
        company: "BrightWeb",
    },
    {
        content:
            "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
        name: "Ava Thompson",
        imgSrc: "/images/people-5.jpg",
        company: "TechMosaic",
    },
    {
        content:
            "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
        name: "Jonathan",
        imgSrc: "/images/people-6.jpg",
        company: "Skyline Digital",
    },
];

const ReviewPage = () => {
    useGSAP(() => {
        gsap.to(".scrub-slide", {
            scrollTrigger: {
                trigger: ".scrub-slide",
                start: "-200% 80%",
                end: "400% 80%",
                scrub: true,
            },
            x: "-1000",
        });
    });

    return (
        <section id="reviews" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">What they say</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Here are some testimonials from my clients and colleagues.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-zinc-600/30 backdrop-blur-sm ring-3 ring-zinc-50/10 p-4 rounded-lg hover:bg-zinc-800/40 
                            transition-colors group reveal-up"
                        >
                            <img
                                src={review.imgSrc}
                                alt={review.name}
                                className="w-12 h-12 mb-2 rounded-full"
                            />
                            <h3 className="text-md font-semibold">
                                {review.name}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {review.company}
                            </p>
                            <blockquote className="mt-2 text-zinc-300">
                                {review.content}
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewPage;
