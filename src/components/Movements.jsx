import React from 'react'

const Movements = ({pokemonInfo}) => {
  
  return (
    <article className='movement-container'>
      <h2 className='movement-title'>Movements</h2>
      {
        pokemonInfo?.moves.map(move => (
          <p className='movement-tag'>{move.move.name}</p>
        ))
      }
    </article>
  )
}

export default Movements