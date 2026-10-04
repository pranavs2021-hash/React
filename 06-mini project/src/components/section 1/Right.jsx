import React from 'react'
import Rightcard from './RIghtcard'

const Right = (props) => {
  return (
  
      <div className='h-full w-2/3 mr-5 p-7 flex gap-10 overflow-x-auto ' >
      {props.user.map(function(user){
         return <Rightcard userk={user}/>
      })}
        

    </div>
  
  )
}

export default Right