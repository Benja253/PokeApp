import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardInfo = ({name}) => {

  const [pokemonInfo, setPokemonInfo] = useState()
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(({data}) => setPokemonInfo(data))
  },[])
  
  return (
    <article className='card-info'>
      <header className='header-card-info'>
        <img src={pokemonInfo && pokemonInfo.sprites.other['official-artwork'].front_default} alt={`sprite ${name}`} />
      </header>
    </article>
  )
}

export default CardInfo