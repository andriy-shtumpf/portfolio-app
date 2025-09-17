const NavItem = ({ label, link, className, ref, icon, onClick }) => {
    return (
        <a
            href={link}
            ref={ref}
            className={`${className} group relative overflow-hidden`}
            onClick={onClick}
        >
            <div className="flex items-center gap-2">
                <span className="material-symbols-rounded text-[18px] opacity-70 group-hover:opacity-100 transition-opacity md:hidden">
                    {icon}
                </span>
                <span className="relative z-10">{label}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </a>
    );
};

export default NavItem;
