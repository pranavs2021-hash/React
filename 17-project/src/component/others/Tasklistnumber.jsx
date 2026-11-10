import React from 'react'

const Tasklistnumber = ({luser}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className=' w-[45%] bg-yellow-600
         px-9 py-6 rounded-2xl'>
            <h2>{luser.taskNumbers.active}</h2>
            <h1>Active task </h1>

        </div>
          <div className=' w-[45%] bg-blue-600 px-9 py-6 rounded-2xl'>
            <h2>{luser.taskNumbers.newTask}</h2>
            <h1>New task </h1>

        </div>
          <div className=' w-[45%] bg-green-600 px-9 py-6 rounded-2xl'>
            <h2>{luser.taskNumbers.completed}</h2>
            <h1>Completed task </h1>

        </div>
          <div className=' w-[45%] bg-red-600 px-9 py-6 rounded-2xl'>
            <h2>{luser.taskNumbers.failed}</h2>
            <h1>Failed task </h1>

        </div>
    </div>
  )
}

export default Tasklistnumber