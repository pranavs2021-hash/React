import React from 'react'
import { Link } from 'react-router'

const Products = () => {
  return (
    <div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold border-2 border-amber-300 rounded-2xl p-3'>
      <h1>Products</h1></div>
       
    <div className='absolute top-40 left-40 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold border-2 border-amber-900 rounded-2xl p-3'><Link to="Men">men</Link></div>
    
    
    </div>
    
  )
}

export default Products