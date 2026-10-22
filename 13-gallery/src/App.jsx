
import React, { useEffect, useState } from 'react'
import Pokem from './components/Pokem'


const App = () => {
  const [userData, setdata] = useState([])
  const [index, setindex] = useState(1)
  useEffect(function(){
    getdata()
  },[index])

  


  
  async function getdata(){
    console.log('hiiii')
    const responsee= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(index-1)*20}`)
    const dataa = await responsee.json();
    setdata(dataa.results)
    console.log(dataa.results)
    
  }
  let users= 'not available'
  if(userData.length>0){
    users=userData.map(function(elem,idx){
      return <div  key={idx} >
        <Pokem elem={elem}/>

      </div>
    })
  }
   
  return (
    <div className='bg-black h-screen text-white p-6 overflow-auto'>
      
      <div className= ' flex flex-wrap gap-5'>
           {users}
      </div>
      <div className=' flex items-center gap-5 justify-center  '>
        <button onClick={()=>{
             if (index>1){
          setindex(index-1)}
             console.log(index)
        }} className='bg-cyan-400 p-4 text-2xl font-bold flex rounded-2xl active:scale-90'>Prev</button>
        <h1>page no {index}</h1>
      <button onClick={()=>{
     
          setindex(index+1)
          console.log(index)

        }}  className='bg-cyan-400 p-4  text-2xl font-bold flex rounded-2xl active:scale-90'>Next</button></div>
      
    </div>

  )
}

export default App