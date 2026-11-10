import React from 'react'

export const Header = ({luser}) => { 
  const setit=(luser.setuser)
  const logout=()=>{
    localStorage.setItem("loggedInUser" , '' )
    setit('')
  }
  return (
    <div className=' flex items-end justify-between '> 
    <h1 className=' text-sm font-bold text-amber-50'>hello <br /> <span className='text-2xl font-bold'> {luser.loggedInuser? luser.loggedInuser.name : "Admin"} ❤️❤️</span></h1>
    
    <button onClick={logout} className='rounded-sm bg-red-600 text-lg p-2 text-white font-medium ' > Logout</button></div>
  )
}
