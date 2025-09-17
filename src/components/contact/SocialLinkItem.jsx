const SocialLinkItem = ({ href, icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 grid place-items-center ring-inset ring-2 rounded-lg
            transition-[background-color,color,border-color] duration-300"
            style={{
                ringColor: "var(--border-primary)",
                color: "var(--text-secondary)",
                backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = "var(--bg-tertiary)";
                e.target.style.color = "var(--accent-primary)";
                e.target.style.ringColor = "var(--border-accent)";
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "var(--text-secondary)";
                e.target.style.ringColor = "var(--border-primary)";
            }}
        >
            {icon}
        </a>
    );
};

export default SocialLinkItem;
