import React from 'react'
import { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltask = () => {

      const autData = useContext(Authcontext)
      
    
    return (
        <div className='bg-gray-950 p-5 mt-5    '>

            <div className='bg-red-500 py-3 px-5 rounded flex mt-3 text-center'>
                <h3 className='w-1/5'>Employee name</h3>
                <h3 className='w-1/5'>New Task</h3>
                <h3 className='w-1/5'>Active task</h3>
                <h3 className='w-1/5'>Complete task</h3>
                <h3 className='w-1/5'>Failed task</h3>
            </div>
            <div>
                {autData.map((elem) => (
                    <div key={elem.id} className='bg-gray-800 py-3 px-5 rounded flex mt-3 text-center'>
                        <h3 className='w-1/5'>{elem.name}</h3>
                        <h3 className='w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
                        <h3 className='w-1/5 text-yellow-300'>{elem.taskNumbers.active}</h3>
                        <h3 className='w-1/5 text-green-400'>{elem.taskNumbers.completed}</h3>
                        <h3 className='w-1/5 text-red-400'>{elem.taskNumbers.failed}</h3>
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default Alltask