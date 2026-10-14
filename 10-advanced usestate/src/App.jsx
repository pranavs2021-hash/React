import React from 'react'
import { useState } from 'react'

/*const App = () => {
  const [num, setnum] = useState(20)
  //console pe first time me value 20 hi hogi kyuki jab value function me pass hui thi to vo 20 hi thi next click pe 40 hojaygi
 const btnclick=()=>{
  console.log('btn clicked')
  setnum(99)
  console.log(num)
 }

  return (
    <div>

      <h1> {num}</h1>
      <button onClick={btnclick}
      > thisis a button</button>
    </div>
  )
}*/


// create object through usestate to print it
/*const App = () => {

  const [first, setfirst] = useState({user:'pranav', age:22})
  function update(){
    console.log(first.user, first.age)
    const newnum={...first}
    newnum.user="aman"
    setfirst(newnum)
    
  }
  return (
    <div>
      <h1>{first.user}</h1>
      <button onClick={update}>click me</button>
    </div>
  )
}

export default App*/
