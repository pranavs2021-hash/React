import React from 'react'
import Navbar from './navbar'
import Page1contents from './Page1contents'



const section1 = (props) => {
  return (
    <div className=' h-screen w-full flex flex-col justify-between p-5'>

        <Navbar/>
        <Page1contents user={props.users}/>
        

    </div>
  )
}

export default section1