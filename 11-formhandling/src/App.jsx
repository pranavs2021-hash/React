import React from 'react'

const App = () => {
 function submithandler(e){
  e.preventDefault()
  console.log("hiiiii")
 }

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} >
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App