import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Error from './Error'

const PokemonCard = ({url}) => {

  const [ pokemon, setPokemon ] = useState()
  const [ isError, setIsError ] = useState(false)

  useEffect(() => {
    axios.get(url)
      .then(({data}) => {
        setPokemon(data)
        setIsError(false)
      })
      .catch(() => setIsError(true))
  },[url])

  return (
    <>
      {
        isError ?
          <Error />
        :
          <article className='card'>
            <header className='header-card'>
              <img src={pokemon && pokemon.sprites.other['official-artwork']['front_default']} alt="pokemon image" />
            </header>
            <div className='body-card'>
              <h2 className='name-pokemon'>{pokemon?.name}</h2>
              <p className='type-pokemon'>
                {pokemon?.types[0].type.name}
                {pokemon?.types[1] && ' / ' + pokemon?.types[1].type.name }
              </p>
              <p className='type-text'>Type</p>
              <ul className='stats-list'>
                {
                  pokemon?.stats.map(stat => (
                    <li key={stat.stat.name} className='stat-container'>
                      {stat.stat.name}
                      <span className='number-stat'>{stat.base_stat}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </article>
      }
    </>
  )
}

export default PokemonCard