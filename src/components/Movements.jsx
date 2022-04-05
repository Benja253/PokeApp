import React from 'react'

const Movements = ({pokemonInfo}) => {
  
  return (
    <article className='movement-container'>
      <hr className='separator-movement' />
      <h2 className='movement-title'>Movements</h2>
      <div className='movement-tag-container'>
        {
          pokemonInfo?.moves.map(move => (
            <p className='movement-tag' key={move.move.name}>{move.move.name}</p>
          ))
        }
      </div>
    </article>
  )
}

export default Movements