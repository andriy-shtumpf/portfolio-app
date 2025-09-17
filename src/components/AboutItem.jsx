const AboutItem = ({ label, number, description }) => {
    return (
        <div className="text-center">
            <div className="flex items-center justify-center mb-2">
                <span
                    className="text-3xl font-bold md:text-5xl"
                    style={{
                        background: "var(--gradient-accent)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "var(--accent-primary)", // Fallback color
                    }}
                >
                    {number}
                </span>
                <span
                    className="font-bold md:text-4xl ml-1"
                    style={{
                        color: "var(--accent-primary)",
                    }}
                >
                    +
                </span>
            </div>
            <p
                className="text-sm font-medium mb-1"
                style={{
                    color: "var(--text-muted)",
                }}
            >
                {label}
            </p>
            {description && (
                <p
                    className="text-lg md:text-xl lg:text-2xl font-black relative tracking-wide"
                    style={{
                        color: "var(--accent-primary)",
                        fontFamily:
                            "'Inter', 'Helvetica Neue', 'Arial Black', sans-serif",
                        fontWeight: 900,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    {description}
                </p>
            )}
        </div>
    );
};

export default AboutItem;
