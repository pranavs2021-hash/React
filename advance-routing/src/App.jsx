import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Products from './components/Products'
import Men from './components/Men'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/men" element={<Men/>} />
        </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App