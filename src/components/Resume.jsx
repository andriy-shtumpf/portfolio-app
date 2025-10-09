import { useNavigate } from "react-router-dom";

const ResumePage = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        // Create a temporary link element to trigger download
        const link = document.createElement("a");
        link.href = "/references/Andriy_Shtumpf_Fullstack_Resume.pdf";
        link.download = "Andriy_Shtumpf_Fullstack_Resume.pdf"; // You can customize the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            {/* Header with back button */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: "var(--bg-card)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-accent)",
                        }}
                    >
                        <span className="material-symbols-rounded text-lg">
                            arrow_back
                        </span>
                        <span>Back to Portfolio</span>
                    </button>

                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        style={{
                            background: "var(--gradient-primary)",
                            color: "white",
                            boxShadow:
                                "0 10px 25px var(--shadow-accent), 0 0 0 1px var(--border-accent)",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.boxShadow =
                                "0 15px 35px var(--shadow-accent), 0 0 0 1px var(--accent-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.boxShadow =
                                "0 10px 25px var(--shadow-accent), 0 0 0 1px var(--border-accent)";
                        }}
                    >
                        <span className="material-symbols-rounded text-lg">
                            download
                        </span>
                        <span>Download Resume</span>
                    </button>
                </div>

                {/* Resume Title */}
                <div className="text-center mb-8">
                    <h1
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{
                            color: "var(--text-primary)",
                            background: "var(--gradient-primary)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        My Resume
                    </h1>
                    <p
                        className="text-lg"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        View and download my professional resume
                    </p>
                </div>

                {/* PDF Viewer Container */}
                <div
                    className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-accent)",
                        height: "85vh", // Full viewport height for better viewing
                        minHeight: "700px", // Ensure minimum readable size
                    }}
                >
                    {/* PDF Embed with full toolbar */}
                    <iframe
                        src="/references/Andriy_Shtumpf_Fullstack_Resume.pdf"
                        className="w-full h-full"
                        title="Resume PDF"
                        style={{
                            border: "none",
                            borderRadius: "inherit",
                        }}
                    />
                </div>

                {/* Additional Download Section */}
                <div className="text-center mt-8">
                    <p
                        className="text-sm mb-4"
                        style={{ color: "var(--text-tertiary)" }}
                    >
                        Having trouble viewing the PDF? Click the download
                        button above to save it to your device.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
