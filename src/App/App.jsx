import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";

export default function App() {
  return (
    <Routes>
      <Route
        exact
        path="/*"
        element={
          <div className="app-container">
            <NavBar />
            <About />
            <Footer />
          </div>
        }
      />
      <Route
        exact
        path="projects"
        element={
          <div className="app-container">
            <NavBar />
            <Projects />
            <Footer />
          </div>
        }
      />
      <Route
        exact
        path="contact"
        element={
          <div className="app-container">
            <NavBar />
            <Contact />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}
