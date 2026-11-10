import React from 'react'

const Completetask = ({ data }) => {
  return (
    <div> <div className='h-full w-[300px] rounded-2xl bg-green-600 shrink-0 p-6 '>

            <div className='flex justify-between items-center'>
              <h3 className='bg-amber-600 px-3 py-1 rounded'>{data.category}</h3>
              <h3 className='text-sm'>{data.date}</h3>

            </div>
            <h2 className='text-2xl font-bold'>{data.title}</h2>

            <h3>{data.description}</h3>
         
            <div className='mt-4 flex justify-between '>
                <button className='p-2 bg-emerald-800 font-bold text-sm rounded-2xl'>completed</button>
                <button className='p-2 bg-red-300 font-bold text-sm rounded-2xl'> failed</button>
            </div>
        </div>
        
        </div>
  )
}

export default Completetask