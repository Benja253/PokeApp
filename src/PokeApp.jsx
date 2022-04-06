import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ListPokemon from './components/ListPokemon'
import PokemonInfo from './components/PokemonInfo'

const PokeApp = () => {
  return (
    <div className='poke-app'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<ListPokemon />} />
          <Route path='/pokemon/:id' element={<PokemonInfo />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default PokeApp