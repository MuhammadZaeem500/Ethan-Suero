import React from "react";
import Navbar from "./components/core/Navbar";
import HeroSection from "./components/core/HeroSection.js";
import About from "./components/core/About";
import Clients from "./components/core/Clients";
import Projects from "./components/core/MoreProjects.js";
import Thoughtful from "./components/core/Thoughtful.js";
import Humble from "./components/core/Humble.js";
import Frazer from "./components/core/Frazer.js";
import Common from "./components/core/common.js";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Clients />
        <Projects />
        <Thoughtful />
        <Humble />
        <Frazer />
        <Common />
      </div>
    </>
  );
}

export default App;
