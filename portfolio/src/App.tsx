// import React from "react";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import About from "./Pages/About";
import Projects from "./components/Projects";
import Contact from "./Pages/Contact";
// import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import BootstrapNav from "./components/BootsrapNav";
import Footer from "./components/Footer";
import CardLayout from "./components/ProjectCarousel";
import TailwindTest from "./components/TailwindTest";

const App = () => {
  return (
    <Router>
      <div className="App">
        <BootstrapNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testtailwind" element={<TailwindTest />} />
          <Route path="/cardlayout" element={<CardLayout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
