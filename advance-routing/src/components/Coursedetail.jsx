import React from 'react'
import { useNavigate, useParams } from 'react-router'

const Coursedetail = () => {
    const nav=useNavigate()
   
    const param= useParams()
    console.log(param.id)

  return (

    <div>Coursedetail

            <button onClick={()=>
                {   nav('/')

                }
            } className='bg-amber-300 p-2 border-amber-300  text-2xl'>Home</button>
    </div>

  )
}

export default Coursedetail