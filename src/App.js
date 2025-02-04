import React from 'react';
import './App.css';
import Navbar from './components/core/Navbar';
import Page1 from './components/core/page1';
import About from './components/core/About';
import Clients from './components/core/Clients';
import Projects from './components/core/MoreProjects.js';
import Thoughtful from './components/core/Thoughtful.js';
import Humble from './components/core/Humble.js';
import Frazer from './components/core/Frazer.js';
import Common from './components/core/common.js';




function App() {
  return (
    <>
      <div>
        <Navbar />
        <Page1 />
        <About/>
        <Clients/>
        <Projects/>
        <Thoughtful/>
        <Humble/>
        <Frazer/>
        <Common/>
        

      </div>

    </>
  );
}

export default App;

