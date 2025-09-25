import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import ResumePage from "./components/Resume";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<ResumePage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
