import React from 'react'

const App = () => {

     const submithandler=(e)=>{
      e.preventDefault()
      console.log("submitted")
        
      }
  return (
    <div>

   

      <div
       className='h-screen px-2 py-1 bg-black w-full text-amber-50 flex flex-col lg:flex lg:flex-row'>
        <form className='flex flex-col gap-7 rounded-2xl items-start w-full p-8' onSubmit={(e)=>{
          submithandler(e)
        }}>
             <h1 className='text-2xl font-bold'>Add notes</h1>
          <input 
          className='h-30 p-1 border-2 w-full  rounded-2xl'type="text" placeholder='write notes header ' />
          <textarea 
          className='h-30  p-1 w-full border-2 border-gray-500 rounded-2xl' placeholder='write the notes'/>
          
          <button 
          className='bg-blue-900 px-6 w-1/2 h-10 rounded-2xl'>submit</button>
        </form>
        <div
         className='bg-fuchsia-400 w-full h-full p-3 lg:border-l-2'>
          <h1 className='text-2xl font-bold'>your notes</h1>
          <div className='flex-wrap p-2 flex gap-1 mt-4'>
            <div className='bg-amber-100 h-30 w-42 rounded-2xl'></div>
           <div className='bg-amber-100 h-30 w-42 rounded-2xl'></div>
             <div className='bg-amber-100 h-30 w-42 rounded-2xl'></div>
          </div>
          
        </div>
     
      </div>
    </div>
  )
}

export default App