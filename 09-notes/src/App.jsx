import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title, settitle] = useState('')
    const [detail, setdet] = useState('')
    const[notee,Setnote] = useState([])
    

     const submithandler=(e)=>{
      e.preventDefault()
      const copynote=[...notee]
      const obj ={title,detail}
      copynote.push(obj)
      Setnote(copynote)
      console.log(copynote)

      settitle('')
      setdet('')

      
        
      }
  return (
    <div>

   

      <div
       className='h-screen px-2 py-1 bg-black w-full text-amber-50 flex flex-col lg:flex lg:flex-row'>
        <form className='flex flex-col gap-7 rounded-2xl items-start w-full p-8' onSubmit={(e)=>{
          submithandler(e)
        }}>
             <h1 className='text-2xl font-bold'>Add notes</h1>
          <input onChange={(e)=>{
            settitle(e.target.value)
          
          }} value={title}
          className='h-30 p-1 border-2 w-full  rounded-2xl'type="text" placeholder='write notes header ' />
          <textarea  onChange={(e)=>{
            setdet(e.target.value)
          
          }}  value={detail}
          className='h-30  p-1 w-full border-2 border-gray-500 rounded-2xl' placeholder='write the notes'/>
          
          <button 
          className='bg-blue-900 px-6 w-1/2 h-10 rounded-2xl'>submit</button>
        </form>
        <div
         className='bg-fuchsia-400 w-full h-full p-3 lg:border-l-2'>
          <h1 className='text-2xl font-bold'>your notes</h1>
          <div className='flex flex-wrap p-2 h-full gap-1 mt-4 overflow-auto'>
            {notee.map(function(el,idx){
              return (
               
                <div  key={idx} className='bg-amber-100 h-30 w-42 rounded-2xl   '>
                  <h1 className='text-blue-500 wrap-break-word leading-tight min-w-0 pl-3 pr-3 mt-2 pt-2 font-bold text-center'> {el.title}</h1>
                  <p className='text-teal-600 pl-3 pr-3 mt-1 font-bold wrap-break-word  '>{el.detail}</p>
                    
                  
                   
                </div>
              )
            })}
            
            
          </div>
          
        </div>
     
      </div>
    </div>
  )
}

export default App