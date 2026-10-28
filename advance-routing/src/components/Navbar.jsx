import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
    return (
    <nav className="bg-emerald-700 text-white p-4">
      <div className="flex items-center justify-between">

        {/* Left content */}
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold">
            GreenLeaf
          </div>

          <Link to="/">Home</Link>

<Link to="/About">About</Link>

<Link to="/Contact">Contact</Link>
<Link to="/Products">Product</Link>

<Link to="/Courses">Courses</Link>


        </div>

        {/* Right content */}
        <div>
          <button className="bg-white text-emerald-700 px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar