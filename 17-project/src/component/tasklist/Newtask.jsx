import React from 'react'

const Newtask = ({ data }) => {
  return (
    <div>  <div className='h-full w-[300px] rounded-2xl bg-blue-600 shrink-0 p-6 '>

            <div className='flex justify-between items-center'>
              <h3 className='bg-amber-600 px-3 py-1 rounded'>{data.category}</h3>
              <h3 className='text-sm'>{data.date}</h3>

            </div>
            <h2 className='text-2xl font-bold'>{data.title}</h2>

            <h3>{data.description}</h3>
         
            
        </div>
        </div>
  )
}

export default Newtask