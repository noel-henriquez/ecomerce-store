import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./components/Home";
import Shop from "./components/Shop"
import "./App.css";
import Features from "./components/Features.js";


function App() {
    return (
        
        <Router>
            <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/features" element={<Features/>} />
                 
            </Routes>
            </div>
        </Router>
    );
}

export default App;
