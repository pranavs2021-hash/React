import React from 'react'
import Accepttask from './Accepttask'
import Completetask from './Completetask'
import Failed from './Failed'
import Newtask from './Newtask'

const Tasklist = ({luser}) => {
 
  return (
    <div
      
      className='mt-10 h-[55%] p-2 flex gap-1.5 overflow-x-auto  scrollit w-full  '
    >
       {luser.tasks.map((elem)=>{
       

        if(elem.active){
          return <Accepttask data={elem}/>
        }

        if (elem.failed){
          return <Failed data={elem}/>

        }
         if (elem.completed){
          return <Completetask data={elem}/>

         }
         if (elem.newTask){
          return <Newtask data={elem}/>
         }
        
       })}

       
        
      
    </div>
  )
}

export default Tasklist