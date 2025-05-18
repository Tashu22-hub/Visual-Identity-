import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/header/About";
import Portfolio from "./components/header/Portfolio";
import Contact from "./components/header/Contact";
import Navbar from "./components/header/Navbar";
import Skills from "./components/header/Skills";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import toast styles

import "./App.css"; // Ensure your CSS file is imported

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />  {/* ✅ Add this to enable toast messages */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
