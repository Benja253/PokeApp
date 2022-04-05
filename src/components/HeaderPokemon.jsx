import React from 'react'
import pokedexLetters from '../assets/logo-pokedex.png'

const HeaderPokemon = ({className}) => {
  return (
    <header className={`rectangle-red list ${className}`}>
      <div className='rectangle-black list'></div>
      <div className='circle list'></div>
      <img
        className='pokedex-letters-header list'
        src={pokedexLetters}
        alt="image pokedex letters"
      />
    </header>
  )
}

export default HeaderPokemon