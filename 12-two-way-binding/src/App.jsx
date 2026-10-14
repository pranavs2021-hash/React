import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
 function submithandler(e){
  e.preventDefault()
  setTitle('')

 }

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} >
        <input    value={title} onChange={(e)=>{
          console.log(e.target.value)
            setTitle(e.target.value)
          
        }} type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App