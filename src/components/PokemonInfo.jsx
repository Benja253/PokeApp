import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CardInfo from './CardInfo'
import HeaderPokemon from './HeaderPokemon'
import Movements from './Movements'
import axios from 'axios'

const PokemonInfo = () => {

  const [isScrollVisible, setIsScrollVisible] = useState(false)

  const { id } = useParams()

  const [pokemonInfo, setPokemonInfo] = useState()
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(({data}) => setPokemonInfo(data))
  },[id])

  document.addEventListener('scroll', e => {
    if(scrollY > 400) {
      setIsScrollVisible(true)
    } else {
      setIsScrollVisible(false)
    }
  })

  const scrollUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='pokemon-info-container'>
      <Link className='go-to-list-pokemon' to='/pokemon/' >&lt;</Link>
      {
        isScrollVisible &&
        <div className='scroll-up' onClick={scrollUp}>&#94;</div>
      } 
      <HeaderPokemon className='header-pokemon-info' />
      <CardInfo pokemonInfo={pokemonInfo} />
      <Movements pokemonInfo={pokemonInfo} />
    </div>
  )
}

export default PokemonInfo