import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between p-4 text-2xl bg-emerald-800 '>
        <div>
          <a href="" className='bg-emerald-700 p-1 rounded-2xl'>Pranav routing </a>
        </div>
        <div className='flex gap-8'>
          <a href="/" className="bg-emerald-700 p-1 rounded-2xl">Home</a>
          <a href="/about" className="bg-emerald-700 p-1 rounded-2xl">About</a>
          <a href="/contact" className="bg-emerald-700 p-1 rounded-2xl">Contact</a>
        </div>
      </div>

    </div>
  )
}

export default Navbar