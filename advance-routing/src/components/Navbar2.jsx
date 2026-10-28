import React from 'react'
import { useNavigate } from 'react-router'

const Navbar2 = () => {

     const nav = useNavigate()

  return (
    <div className=' flex gap-6 items-center bg-amber-400'>
            <button onClick={()=>
                {   nav('/')

                }
            } className='bg-amber-300 p-2 border-amber-300  text-2xl  active:scale-90'>Home</button>
            
            <button onClick={()=>
                {   nav(-1)

                }
            } className='bg-amber-300 p-2 border-amber-300  text-2xl  active:scale-90'>back</button>
             <button onClick={()=>
                {   nav(+1)

                }
            } className='bg-amber-300 p-2 border-amber-300  text-2xl  active:scale-90'>next</button>
            </div>
  )
}

export default Navbar2