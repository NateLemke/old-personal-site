import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from "./components/navBar.js"
import Header from "./components/header.js"
import About from "./components/about.js"
import Skills from "./components/skills.js"
import Projects from "./components/projects.js"
import Contact from "./components/contact.js"

export default function App() {
  return (
    <div className="App" id="top">
      <NavBar  />
      <Header  />
      <About  />
      <Skills  />
      <Projects  />
      <Contact  />
    </div>
  );
}

