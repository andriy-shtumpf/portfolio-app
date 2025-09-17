import Navbar from "../Navbar";

const Navigation = ({ navOpen, handleIsOpen, scrolled }) => {
    return (
        <div className="relative md:justify-self-center flex items-center gap-3">
            {/* Menu Button */}
            <button className="menu-btn" onClick={handleIsOpen}>
                <span className="material-symbols-rounded">
                    {navOpen ? "close" : "menu"}
                </span>
            </button>
            <Navbar navOpen={navOpen} scrolled={scrolled} />
        </div>
    );
};

export default Navigation;
