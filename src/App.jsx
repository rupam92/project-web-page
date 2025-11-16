import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Offer from "./pages/offer";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
