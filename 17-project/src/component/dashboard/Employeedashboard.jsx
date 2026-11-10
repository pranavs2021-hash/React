import React from 'react'
import { Header } from '../others/Header'
import Tasklistnumber from '../others/Tasklistnumber'
import Tasklist from '../tasklist/Tasklist'

const Employeedashboard = ({luser}) => {
  return (
    <div className='bg-[#1c1c1c] p-12    h-screen'>

      <Header luser={luser}/>
      <Tasklistnumber luser={luser.loggedInuser}/>
      <Tasklist luser={luser.loggedInuser}/>
    </div>
  )
}

export default Employeedashboard