import React, { useContext, useState } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Createtask = () => {
  const  userdata = useContext(Authcontext)
  
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const taask = {
  title: taskTitle,
  date: taskDate,
  category,
  description,
  active: false,
  newTask: true,
  completed: false,
  failed: false
}


  const submithandler = (e) => {
    e.preventDefault()
  
  const data=userdata
    data.forEach((elem)=> {
      if(assignTo==elem.name){
        elem.tasks.push(taask)
        elem.taskNumbers.newTask=(elem.taskNumbers.newTask+1)
         localStorage.setItem('employees', JSON.stringify(data))

  

      }
      
    });
    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
    
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submithandler(e)

      }} className='bg-gray-950 px-5 py-2 flex justify-between mt-5' >

        <div className='w-1/2'>
          <div>
            <h3>Task title</h3>
            <input value={taskTitle} onChange={(e)=>{
              setTaskTitle(e.target.value)
            }} className=' rounded bg-white px-3 py-2 text-black outline-none w-4/5' type="text" placeholder='Enter task title' />
          </div>
          <div className=''>
            <h3>Date</h3>
            <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className='rounded bg-white px-3 py-2 text-black outline-none w-4/5' type="date" />
          </div>
          <div className=''>
            <h3>Assign to</h3>
            <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className=' rounded bg-white px-3 py-2 text-black outline-none w-4/5' type="text" placeholder='Employee name ' /></div>
          <div>
            <h3>Category</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className='rounded bg-white px-3 py-2 text-black outline-none w-4/5' type="text" placeholder='Design, development, etc.' /></div>

        </div>

        <div className='w-1/2 flex flex-col  '>
          <h3>Description</h3>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className=' rounded bg-white px-3 py-2 text-black outline-none' name="description" rows="5" cols="6"></textarea>
          <button onClick={submithandler}
           className='bg-emerald-600 mt-4 rounded'>Create task</button>
        </div>




      </form>
    </div>
  )
}

export default Createtask