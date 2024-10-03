import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FormPage from "./pages/form";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/form" element={ <FormPage /> } />
            </Routes>
        </Router>
    )  
}

export default App
