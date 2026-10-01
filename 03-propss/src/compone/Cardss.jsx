import React from 'react'

const Cardss = (props) => {

  console.log(props)
  return (
    <div><div className='card'>
              <img src='https://imgs.search.brave.com/-Mt22rDHFgPXbmPSbBTWTaUMCREjy4zCOnBVVDHVe_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb29k/LnN0b3JlL2Nkbi9z/aG9wL2ZpbGVzL01l/bnVfQmxvY2tzLnBu/Zz92PTE3ODk2NzQz/MzImd2lkdGg9ODAw'></img>
                <h1>{props.user}</h1>
                <h2>{props.age}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima?</p>
            <button>check profile</button>
          </div></div>
  )
}

export default Cardss