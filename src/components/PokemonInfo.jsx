import React from 'react'
import { useParams } from 'react-router-dom'
import CardInfo from './cardInfo'
import HeaderPokemon from './HeaderPokemon'

const PokemonInfo = () => {

  const { name } = useParams()

  return (
    <>
      <HeaderPokemon />
      <CardInfo name={name} />

    </>
  )
}

export default PokemonInfo