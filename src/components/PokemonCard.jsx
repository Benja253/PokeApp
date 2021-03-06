import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Error from './Error'
import { useNavigate } from 'react-router-dom'
import ChargingPage from './ChargingPage'

const PokemonCard = ({url, pokemonsUrl}) => {

  const [ pokemon, setPokemon ] = useState()
  const [ isError, setIsError ] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(typeof pokemonsUrl === 'string'){
      setIsError(false)
      setIsLoading(true)
      axios.get(url)
      .then(({data}) => {
        setPokemon(data)
        setIsError(false)
        })
        .catch(() => {
          setIsError(true)
        })
        .finally(() => setIsLoading(false))
    } else  {
      axios.get(url)
        .then(({data}) => {
          setPokemon(data)
          setIsError(false)
        })
        .catch(() => setIsError(true))
    }
  },[url])

  const navigate = useNavigate()

  return (
    <>
      {
        isError ?
          <Error />
        :
          isLoading ?
            <ChargingPage />
          :
            <article className={`card ${pokemon?.types[0].type.name}-border`} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
              <header className={'header-card' + ' ' + pokemon?.types[0].type.name}>
                <img
                  className='img-pokemon-card'
                  src={pokemon && pokemon.sprites.other['official-artwork']['front_default']} alt="pokemon image" 
                />
              </header>
              <div className='body-card'>
                <h2 className='name-pokemon'>
                  {pokemon?.name}
                </h2>
                <p className='type-pokemon'>
                  {pokemon?.types[0].type.name}
                  {pokemon?.types[1] && ' / ' + pokemon?.types[1].type.name }
                </p>
                <p className='type-text'>Type</p>
                <hr className='setting-hr' />
                <ul className='stats-list'>
                  {
                    pokemon?.stats.map(stat => (
                      <li key={stat.stat.name} className='stat-container'>
                        {stat.stat.name}
                        <span className='number-stat'>
                          {stat.base_stat}
                        </span>
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