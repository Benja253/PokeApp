import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const FormList = ({setTypeTarget, setPokemonTarget, setPage, arrayPages, setPokemonPerPage, pokemonPerPage}) => {

  const [typePokemon, setTypePokemon] = useState()
  
  const trainerName = useSelector(state => state.trainerName)

  const submitAside = e =>{
    e.preventDefault()
    const valueTrimmedAndLowerCase = e.target.firstChild.value.trim().toLowerCase()
    setPokemonTarget(valueTrimmedAndLowerCase)
    e.target.firstChild.value = ''
    e.target.lastChild.value = 'All pokemons'
  }

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/')
      .then(({data}) => setTypePokemon(data.results))
  },[])

  const onChangeSelect = e => {
    setPokemonTarget(undefined)
    setTypeTarget(e.target.value)
  }

  return (
    <aside className='aside-container'>
      <h1 className='title-form-list'><span className='span-name-trainer'>Welcome {trainerName}</span>, here you can find your favorite pokemon</h1>
      <form onSubmit={e => submitAside(e)}>
        <input
          className='input-form-list'
          type="text"
        />
        <button className='button-form-list'>Search</button>
        <select 
          defaultValue='All pokemons'
          onChange={e => onChangeSelect(e)}>
          <option value='All pokemons'>All pokemons</option>
          {
            typePokemon?.map(type => (
              <option key={type.name} value={type.name}>{type.name}</option>
            ))
          }
        </select>
        <select
          defaultValue={pokemonPerPage}
          onChange={e => setPokemonPerPage(e.target.value)}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
      </form>
    </aside>
  )
}

export default FormList