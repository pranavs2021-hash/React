import React from 'react'
import Right from './Right'
import Left from './Left'

const Page1contents = (props) => {
  return (
    <div className=' h-[90%] flex gap-10'>
      <Left/>
        <Right user={props.user}/>
        
        
    </div>
  )
}

export default Page1contents