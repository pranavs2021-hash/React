import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Products from './components/Products'
import Men from './components/Men'
import Kids from './components/Kids'
import Courses from './components/Courses'
import Coursedetail from './components/Coursedetail'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Navbar2/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/men" element={<Men/>} />
           <Route path="/Products/kids" element={<Kids/>} />
           <Route path="/courses" element ={<Courses/>}/>
           <Route path="/courses/:id" element ={<Coursedetail/>}/>

        </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App