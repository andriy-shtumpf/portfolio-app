import { useNavigate } from "react-router-dom";

const ResumePage = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        // Create a temporary link element to trigger download
        const link = document.createElement("a");
        link.href = "/shtumpf_andriy_fullstack_resume.pdf";
        link.download = "shtumpf_andriy_fullstack_resume.pdf"; // You can customize the filename
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
                    className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-accent)",
                        aspectRatio: "8.5 / 11", // US Letter format aspect ratio
                        maxHeight: "85vh", // Prevent it from being too tall
                        minHeight: "600px", // Ensure minimum readable size
                    }}
                >
                    {/* PDF Embed */}
                    <div className="relative w-full h-full">
                        <iframe
                            src="/shtumpf_andriy_fullstack_resume.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=FitV&view=FitV"
                            className="w-full h-full"
                            title="Resume PDF"
                            style={{
                                border: "none",
                                borderRadius: "inherit",
                            }}
                        />

                        {/* Fallback message for browsers that don't support PDF viewing */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                            style={{
                                backgroundColor: "var(--bg-card)",
                                color: "var(--text-secondary)",
                                display: "none", // Will be shown by CSS if iframe fails
                            }}
                            id="pdf-fallback"
                        >
                            <span
                                className="material-symbols-rounded text-6xl mb-4"
                                style={{ color: "var(--accent-primary)" }}
                            >
                                description
                            </span>
                            <h3
                                className="text-xl font-semibold mb-4"
                                style={{ color: "var(--text-primary)" }}
                            >
                                PDF Preview Not Available
                            </h3>
                            <p className="mb-6 max-w-md">
                                Your browser doesn't support PDF preview. Please
                                download the resume to view it.
                            </p>
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    background: "var(--gradient-primary)",
                                    color: "white",
                                }}
                            >
                                <span className="material-symbols-rounded text-lg">
                                    download
                                </span>
                                <span>Download Resume</span>
                            </button>
                        </div>
                    </div>
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
