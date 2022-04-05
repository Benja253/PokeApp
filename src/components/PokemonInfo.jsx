import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardInfo from './cardInfo'
import HeaderPokemon from './HeaderPokemon'
import Movements from './Movements'
import axios from 'axios'

const PokemonInfo = () => {

  const { name } = useParams()

  const [pokemonInfo, setPokemonInfo] = useState()
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(({data}) => setPokemonInfo(data))
  },[])

  return (
    <div className='pokemon-info-container'>
      <HeaderPokemon className='header-pokemon-info' />
      <CardInfo pokemonInfo={pokemonInfo} />
      <Movements pokemonInfo={pokemonInfo} />
    </div>
  )
}

export default PokemonInfo