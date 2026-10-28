import React from 'react'
import { Link } from 'react-router'

const Products = () => {
  return (
    <div>
    
       
    <div className='absolute top-40 left-40 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold border-2 border-amber-900 rounded-2xl p-3'><Link to="/Products/men">men</Link></div>
        <div className='absolute top-80 left-90 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold border-2 border-amber-900 rounded-2xl p-3'><Link to="/Products/kids">kids</Link></div>
    
    </div>
    
  )
}

export default Products