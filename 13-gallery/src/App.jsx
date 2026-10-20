
import React, { useState } from 'react'


const App = () => {
  const [userData, setdata] = useState([])

  


  
  async function getdata(){
    console.log('hiiii')
    const responsee= await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const dataa = await responsee.json();
    setdata(dataa.results)
    console.log(dataa.results)
    
  }
  let users= 'not available'
  if(userData.length>0){
    users=userData.map(function(elem,idx){
      return <div  key={idx} className='h-40 w-44'>

        <img
  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${elem.url.split('/').filter(Boolean).pop()}.png`}
  alt={elem.name}
 className='h-35 w-40 bg-amber-100'/>  
        <h1 className='font-black text-lg'>{elem.name}</h1>

      </div>
    })
  }
   
  return (
    <div className='bg-black h-screen text-white p-6 overflow-auto'>
      <button onClick={getdata} className='bg-amber-600  p-4 m-5 active:scale-90'> load data </button>
      <div className= ' flex flex-wrap gap-5'>
           {users}
      </div>
    </div>

  )
}

export default App