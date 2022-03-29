import React from 'react'
import pokedexLetters from '../assets/logo-pokedex.png'

const HeaderPokemon = () => {
  return (
    <header className='header'>
      <img
        className='pokedex-letters-header'
        src={pokedexLetters}
        alt="image pokedex letters"
      />
    </header>
  )
}

export default HeaderPokemon