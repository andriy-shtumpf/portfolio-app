import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import ReferencesPage from "./components/References";
import ResumePage from "./components/Resume";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/references" element={<ReferencesPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
