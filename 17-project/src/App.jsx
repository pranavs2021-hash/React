import React, { useContext, useEffect, useState } from 'react'
import Login from './component/auth/Login'
import Employeedashboard from './component/dashboard/Employeedashboard'
import Admindshboard from './component/dashboard/Admindshboard'
import { getloacalStorage, setlocalStorage } from './utils/localstorage'
import { Authcontext } from './context/Authprovider'


const App = () => {


  const [user, setuser ] = useState(null)
  const [loggedInuser, setloggedInuser] = useState(null)
  const data=useContext(Authcontext)

useEffect(() => {
  const loggedinuser= localStorage.getItem("loggedInUser")

  if(loggedinuser){
   const userdata= JSON.parse(loggedinuser)
   setuser(userdata.role)
   setloggedInuser(userdata.data)
  }
  
}, [])


  // useEffect(() => {
  //   if(data){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //     setuser(loggedInUser.role)}
  //   }
  
  
   
  // }, [data])
  

   const HandleLogin=(email,password)=>{
    

    if(email==='admin@123' && password==123){
      setuser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    }
    else if(data ){  
      const employe= data.find((e)=>
     
    email==e.email && password==e.password
    )
     if (employe){
      setloggedInuser(employe)
     setuser("employee")
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee', data: employe}))
     }}
    else  {
       alert('who are you')
    }
    }
    
   
  
   
  return (
   <div className='text-amber-50'>
    <>
   {!user?<Login handlelogin={HandleLogin}/>:''}
   {user=='admin'? <Admindshboard luser={{loggedInuser,setuser}} /> :( user=='employee'?<Employeedashboard luser={{loggedInuser,setuser}}/>:'')}
     
    </>
    

   </div>
    
  )
}

export default App