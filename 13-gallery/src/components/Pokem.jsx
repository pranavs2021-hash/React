import React from 'react'

const Pokem = (props) => {
  return (
    <div><a href={`https://www.pokemon.com/us/pokedex/${props.elem.name}`} target='_blank'>
          <div className='h-40 w-44'>   <img
  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.elem.url.split('/').filter(Boolean).pop()}.png`}
  alt={props.elem.name}
 className='h-35 w-40 bg-amber-100'/>  </div>

     
        <h1 className='font-black text-lg'>{props.elem.name}</h1>

    </a></div>
  )
}

export default Pokem