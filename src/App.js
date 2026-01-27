import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./components/Portfolio";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ProjectsPage from "./components/ProjectsPage";
import AnimatedPage from "./components/AnimatedPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Portfolio /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
        <Route path="/project/:projectId" element={<AnimatedPage><ProjectDetailPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;