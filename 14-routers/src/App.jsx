import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/navbar';
const App = () => {
  return (
    <div className="relative min-h-screen bg-[#483C32]">
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>


    </div>
  )
}

export default App