import React from 'react'
import { Header } from '../others/Header'
import Createtask from '../others/Createtask'
import Alltask from '../others/Alltask'

const Admindshboard = ({luser}) => {
  return (
    <div className=' h-screen w-full p-5' >
      <Header luser={luser} />
     <Createtask/>
     <Alltask/>
    </div>
  )
}

export default Admindshboard