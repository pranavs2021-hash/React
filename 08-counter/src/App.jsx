import React from 'react'
import { useState } from 'react';

const App = () => {

  const [first, setfirst] = useState(0)
  const [prev, setprev] = useState(first)

  function update(){
    
    setfirst(first+1)
    setprev(first)
  }
  function update2(){
    setfirst(first+5)
    setprev(first)
  }
  return (
    <div>
      <div className=' h-screen w-full'>
        <div className=' h-1/2 flex gap-6'><h1 className='w-1/4  bg-amber-100 text-9xl flex justify-center '>{first}</h1>
        <h1 className='w-1/4  bg-amber-100 text-9xl '>{prev}</h1></div>
        
        <button onClick={()=>{
          update()
        }} className=' active:bg-lime-300  hover:bg-cyan-400 w-1/4 h-25 rounded-2xl p-2 mt-2 bg-fuchsia-300 '>next number</button>
         <button onClick={()=>{
          update2()
         }} className=' active:bg-lime-300  hover:bg-cyan-400 w-1/4 h-25 rounded-2xl p-2 mt-2 bg-fuchsia-300 ml-5 '>number +5</button>
      </div>
      <div></div>
    </div>
  )
}

export default App