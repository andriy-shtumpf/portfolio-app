import { useState } from "react";

const SkillIcon = ({ src, alt, className, centerText }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageError = () => {
        console.log(`Failed to load icon: ${src}`);
        setImageError(true);
    };

    const handleImageLoad = () => {
        console.log(`Successfully loaded icon: ${src}`);
        setImageLoaded(true);
    };

    // Generate initials from the alt text
    const getInitials = (text) => {
        return text
            .split(" ")
            .map((word) => word[0])
            .join("")
            .substring(0, 2)
            .toUpperCase();
    };

    if (imageError || !src) {
        return (
            <div
                className={`w-10 h-10 mb-2 bg-gradient-to-br from-sky-400/30 to-purple-400/30 
                           rounded-lg flex items-center justify-center text-white font-bold text-xs
                           border border-white/10 ${
                               centerText ? "mx-auto" : ""
                           }`}
            >
                {getInitials(alt)}
            </div>
        );
    }

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`${className} ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
                onError={handleImageError}
                onLoad={handleImageLoad}
            />
            {!imageLoaded && !imageError && (
                <div
                    className={`w-10 h-10 mb-2 bg-gradient-to-br from-sky-400/20 to-purple-400/20 
                               rounded-lg flex items-center justify-center animate-pulse
                               ${centerText ? "mx-auto" : ""}`}
                >
                    <div className="w-6 h-6 bg-white/20 rounded animate-spin"></div>
                </div>
            )}
        </>
    );
};

export default SkillIcon;
