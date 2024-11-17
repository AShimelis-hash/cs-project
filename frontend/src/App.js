import React from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Saving from './Components/Saving';
import Credit from './Components/Credit';
import Projects from './Components/Projects';
import Investment from './Components/Investment';
import Training from './Components/Training';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/saving" element={<Saving />} />
      <Route path="/credit" element={<Credit/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/training" element={<Training />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
