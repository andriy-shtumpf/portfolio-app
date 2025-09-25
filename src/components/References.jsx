import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReferencesPage = () => {
    const navigate = useNavigate();
    const [selectedReference, setSelectedReference] = useState(null);
    const [pdfLoadError, setPdfLoadError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    const references = [
        {
            id: 1,
            filename: "Andriy Shtumpf from Senior HR Manager.pdf",
            displayName: "Senior HR Manager Reference",
            description: "Professional reference letter from Senior HR Manager",
            company: "Eleks Inc.",
            position: "HR Manager",
            date: "2025",
        },
        {
            id: 2,
            filename: "Andriy Shtumpf Reference.pdf",
            displayName: "Professional Reference Letter from Senior Engineer",
            description: "Worked in the same team for four years",
            company: "Eleks Inc.",
            position: "Reference",
            date: "2025",
        },
        {
            id: 3,
            filename: "Referral-Letter-for-Andriy-Shtumpf.pdf",
            displayName: "Professional Referral Letter",
            description: "Worked in the same team for four years",
            company: "Health Care Service Corporation",
            position: "Middle Software Engineer",
            date: "2025",
        },
    ];

    const handleDownload = (filename, displayName) => {
        const link = document.createElement("a");
        link.href = `/references/${filename}`;
        link.download =
            displayName.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePreview = (reference) => {
        setSelectedReference(reference);
        setPdfLoadError(false);
        setIsLoading(true);
        setShowFallback(false);
    };

    useEffect(() => {
        if (selectedReference) {
            setPdfLoadError(false);
            setIsLoading(true);
            setShowFallback(false);

            const timer = setTimeout(() => {
                setIsLoading(false);
                setShowFallback(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [selectedReference]);

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

                    {selectedReference && (
                        <button
                            onClick={() =>
                                handleDownload(
                                    selectedReference.filename,
                                    selectedReference.displayName
                                )
                            }
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
                            <span>Download Reference</span>
                        </button>
                    )}
                </div>

                {/* References Title */}
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
                        Professional References
                    </h1>
                    <p
                        className="text-lg"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        View and download my professional reference letters
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* References List */}
                    <div className="lg:w-1/3">
                        <h2
                            className="text-xl font-semibold mb-4"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Available References
                        </h2>
                        <div className="space-y-4">
                            {references.map((reference) => (
                                <div
                                    key={reference.id}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                                        selectedReference?.id === reference.id
                                            ? "scale-105"
                                            : "hover:scale-102"
                                    }`}
                                    style={{
                                        backgroundColor:
                                            selectedReference?.id ===
                                            reference.id
                                                ? "var(--bg-tertiary)"
                                                : "var(--bg-card)",
                                        borderColor:
                                            selectedReference?.id ===
                                            reference.id
                                                ? "var(--accent-primary)"
                                                : "var(--border-accent)",
                                        boxShadow:
                                            selectedReference?.id ===
                                            reference.id
                                                ? "0 10px 25px var(--shadow-accent)"
                                                : "0 5px 15px var(--shadow-primary)",
                                    }}
                                    onClick={() => handlePreview(reference)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3
                                                className="font-semibold text-sm mb-1"
                                                style={{
                                                    color: "var(--text-primary)",
                                                }}
                                            >
                                                {reference.displayName}
                                            </h3>
                                            <p
                                                className="text-xs mb-2"
                                                style={{
                                                    color: "var(--text-secondary)",
                                                }}
                                            >
                                                {reference.company} •{" "}
                                                {reference.date}
                                            </p>
                                            <p
                                                className="text-xs"
                                                style={{
                                                    color: "var(--text-tertiary)",
                                                }}
                                            >
                                                {reference.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 ml-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDownload(
                                                        reference.filename,
                                                        reference.displayName
                                                    );
                                                }}
                                                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                                style={{
                                                    backgroundColor:
                                                        "var(--accent-primary)",
                                                    color: "white",
                                                }}
                                                title="Download"
                                            >
                                                <span className="material-symbols-rounded text-sm">
                                                    download
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="lg:w-2/3">
                        {selectedReference ? (
                            <div
                                className="w-full rounded-2xl overflow-hidden shadow-2xl"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border-accent)",
                                    aspectRatio: "8.5 / 11",
                                    maxHeight: "85vh",
                                    minHeight: "600px",
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* PDF Viewer - Always show */}
                                    <object
                                        data={`/references/${selectedReference.filename}`}
                                        type="application/pdf"
                                        className="w-full h-full"
                                        style={{
                                            border: "none",
                                            borderRadius: "inherit",
                                        }}
                                        onLoad={() => {
                                            setIsLoading(false);
                                            setShowFallback(false);
                                        }}
                                    >
                                        <iframe
                                            src={`/references/${selectedReference.filename}#toolbar=1&navpanes=0&scrollbar=0&zoom=FitV&view=FitV`}
                                            className="w-full h-full"
                                            title={`Reference PDF - ${selectedReference.displayName}`}
                                            style={{
                                                border: "none",
                                                borderRadius: "inherit",
                                            }}
                                            onLoad={() => {
                                                setIsLoading(false);
                                                setShowFallback(false);
                                            }}
                                        />
                                    </object>

                                    {/* Loading indicator */}
                                    {isLoading && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-opacity-90"
                                            style={{
                                                backgroundColor:
                                                    "var(--bg-card)",
                                            }}
                                        >
                                            <div className="text-center">
                                                <div
                                                    className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                                                    style={{
                                                        borderColor:
                                                            "var(--accent-primary)",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    Loading PDF...
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Fallback options overlay */}
                                    {showFallback && !isLoading && (
                                        <div
                                            className="absolute bottom-4 right-4 flex flex-col gap-2"
                                            style={{ zIndex: 10 }}
                                        >
                                            <div
                                                className="bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                                                style={{
                                                    backgroundColor:
                                                        "var(--bg-card)",
                                                    border: "1px solid var(--border-accent)",
                                                }}
                                            >
                                                <p
                                                    className="text-xs mb-2"
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                    }}
                                                >
                                                    PDF not loading?
                                                </p>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            handleDownload(
                                                                selectedReference.filename,
                                                                selectedReference.displayName
                                                            )
                                                        }
                                                        className="flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-all duration-300 hover:scale-105"
                                                        style={{
                                                            background:
                                                                "var(--gradient-primary)",
                                                            color: "white",
                                                        }}
                                                    >
                                                        <span className="material-symbols-rounded text-sm">
                                                            download
                                                        </span>
                                                        Download
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            window.open(
                                                                `/references/${selectedReference.filename}`,
                                                                "_blank"
                                                            )
                                                        }
                                                        className="flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-all duration-300 hover:scale-105"
                                                        style={{
                                                            backgroundColor:
                                                                "var(--bg-tertiary)",
                                                            color: "var(--text-primary)",
                                                            border: "1px solid var(--border-accent)",
                                                        }}
                                                    >
                                                        <span className="material-symbols-rounded text-sm">
                                                            open_in_new
                                                        </span>
                                                        Open
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setShowFallback(
                                                                false
                                                            )
                                                        }
                                                        className="flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-all duration-300 hover:scale-105"
                                                        style={{
                                                            backgroundColor:
                                                                "var(--bg-secondary)",
                                                            color: "var(--text-tertiary)",
                                                        }}
                                                        title="Hide this overlay"
                                                    >
                                                        <span className="material-symbols-rounded text-sm">
                                                            close
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Full fallback message (only if explicitly requested) */}
                                    {pdfLoadError && (
                                        /* Fallback message */
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                            style={{
                                                backgroundColor:
                                                    "var(--bg-card)",
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            <span
                                                className="material-symbols-rounded text-6xl mb-4"
                                                style={{
                                                    color: "var(--accent-primary)",
                                                }}
                                            >
                                                description
                                            </span>
                                            <h3
                                                className="text-xl font-semibold mb-4"
                                                style={{
                                                    color: "var(--text-primary)",
                                                }}
                                            >
                                                PDF Preview Not Available
                                            </h3>
                                            <p className="mb-6 max-w-md">
                                                Your browser doesn't support PDF
                                                preview. Please download the
                                                reference to view it.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <button
                                                    onClick={() =>
                                                        handleDownload(
                                                            selectedReference.filename,
                                                            selectedReference.displayName
                                                        )
                                                    }
                                                    className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                                    style={{
                                                        background:
                                                            "var(--gradient-primary)",
                                                        color: "white",
                                                    }}
                                                >
                                                    <span className="material-symbols-rounded text-lg">
                                                        download
                                                    </span>
                                                    <span>
                                                        Download Reference
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        window.open(
                                                            `/references/${selectedReference.filename}`,
                                                            "_blank"
                                                        )
                                                    }
                                                    className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                                    style={{
                                                        backgroundColor:
                                                            "var(--bg-tertiary)",
                                                        color: "var(--text-primary)",
                                                        border: "1px solid var(--border-accent)",
                                                    }}
                                                >
                                                    <span className="material-symbols-rounded text-lg">
                                                        open_in_new
                                                    </span>
                                                    <span>Open in New Tab</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div
                                className="w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border-accent)",
                                    aspectRatio: "8.5 / 11",
                                    maxHeight: "85vh",
                                    minHeight: "600px",
                                }}
                            >
                                <div className="text-center p-8">
                                    <span
                                        className="material-symbols-rounded text-6xl mb-4"
                                        style={{
                                            color: "var(--accent-primary)",
                                        }}
                                    >
                                        folder_open
                                    </span>
                                    <h3
                                        className="text-xl font-semibold mb-4"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        Select a Reference
                                    </h3>
                                    <p
                                        className="max-w-md"
                                        style={{
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        Choose a reference from the list on the
                                        left to preview it here.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="text-center mt-8">
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-tertiary)" }}
                    >
                        Having trouble viewing the PDFs? Click the download
                        buttons to save them to your device.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReferencesPage;
