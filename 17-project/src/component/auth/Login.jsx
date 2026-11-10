import React, { useState } from 'react'

const Login = ({handlelogin}) => {
        const [email, setemail] = useState('')
        const [pass, setpass] = useState('')
    const submithandler = (event) => {
        event.preventDefault()
        handlelogin(email,pass)
        console.log(email)
        console.log(pass)
        setemail("")
        setpass("")
    }

  return (
     <div className=' h-screen w-screen flex items-center justify-center text-[#404040]'>
        <div className='border-2 border-[#90e117] bg-[#F5F5F5] p-20 rounded-xl'>
            <form onSubmit={(e)=>{{submithandler(e)}}}  className='flex flex-col items-center justify-center '>
                <input value={email} onChange={(e)=>{
                    setemail(e.target.value)
                    }} required className='border-2 border-[#90e117] p-3 rounded-full outline-none placeholder:text-gray-500' type="email" placeholder='enter your email'/>
                <input value={pass} onChange={(e)=>{
                    setpass(e.target.value)
                }} required className='border-2 border-[#84CC16] p-3 rounded-full outline-none placeholder:text-gray-500 m-2' type="password" placeholder='enter your password'/>
                 <label className='select-none'>
                    <input type="checkbox" />  <span className='text-sm text-gray-500'>Remember me</span>
                </label>
                <button className='px-5 w-full py-1.5 bg-[#D9F99D] border-2 border-[#84CC16] rounded-2xl'>Submit</button>
               
            </form>
        </div>
     </div>
    
  )
}

export default Login