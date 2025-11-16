
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import Offers from './pages/Offer';
import About from './pages/About';

import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/offer" element={<Offers/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
