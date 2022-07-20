import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import {AnimatePresence} from "framer-motion/dist/framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/About" exact element={ <About /> } />
                <Route path="/Projects" exact element={ <Projects /> } />
                <Route path="/Contact" exact element={ <Contact /> } />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;