import ThemeToggle from "../ThemeToggle";

const StatusBadge = () => {
    return (
        <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button - Outside overflow container */}
            <ThemeToggle />

            {/* Status Badge */}
            <div
                className="flex items-center gap-3 tech-status-indicator h-11 rounded-xl px-4"
                style={{
                    backgroundColor: "var(--bg-glass)",
                    border: "1px solid var(--border-accent)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}
            >
                <figure className="w-10 h-10 rounded-xl overflow-hidden p-1">
                    <img
                        src="/images/custom/personal_photo.jpg"
                        width={40}
                        height={40}
                        alt="My Avatar"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </figure>

                <div
                    className="flex items-center gap-2 text-sm tracking-wide float-animation"
                    style={{
                        color: "var(--text-secondary)",
                    }}
                >
                    <span className="relative w-3 h-3 rounded-full bg-green-500 tech-glow">
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                    </span>
                    <span className="font-medium">Available for work</span>
                </div>
            </div>
        </div>
    );
};

export default StatusBadge;
