import React from "react";
import { Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;