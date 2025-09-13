import ButtonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";

const HeroPage = () => {
    return (
        <section
            className="pt-28 lg:pt-36 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
            id="home"
            style={{
                backgroundImage:
                    "url('/images/custom/profile-silhouette5.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 relative z-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/images/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="My Avatar"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
                            <span className=" relative w-2 h-2 rounded-full bg-green-500">
                                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-white">
                        Building Scalable Modern Websites for the Future
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Download Resume"
                            icon="download"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure
                        className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400/20
                        via-25% via-sky-400/10 to-65% rounded-[60px] overflow-hidden backdrop-blur-sm"
                    >
                        <img
                            src="/images/custom/personal_photo.jpg"
                            width={650}
                            height={800}
                            alt="Andriy Shtumpf"
                            className="w-full opacity-80"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
