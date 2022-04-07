import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import settingIcon from '../assets/icon-setting.png'

const FormList = ({setTypeTarget, setPokemonTarget, setIsVisible, setIsVisiblePagination}) => {

  const [typePokemon, setTypePokemon] = useState()
  
  const trainerName = useSelector(state => state.trainerName)

  const submitAside = e =>{
    e.preventDefault()
    const valueTrimmedAndLowerCase = e.target.firstChild.firstChild.value.trim().toLowerCase()
    setPokemonTarget(valueTrimmedAndLowerCase)
    e.target.firstChild.firstChild.value = ''
    e.target.lastChild.value = 'All pokemons'
    setIsVisiblePagination(false)
  }

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/')
      .then(({data}) => setTypePokemon(data.results))
  },[])

  const onChangeSelect = e => {
    setPokemonTarget(undefined)
    setTypeTarget(e.target.value)
    setIsVisiblePagination(true)
  }

  return (
    <aside className='aside-container'>
      <h1 className='title-form-list'>
        <span className='span-name-trainer'>Welcome {trainerName}</span>, 
        here you can find your favorite pokemon
      </h1>
      <form className='form-container-list' onSubmit={e => submitAside(e)}>
        <div className='search-container'>
          <input
            className='input-form-list'
            type="text"
            placeholder='search pokemon by name'
          />
          <button className='button-form-list'>Search</button>
        </div>
        <select
          className='select-type-pokemon'
          defaultValue='All pokemons'
          onChange={e => onChangeSelect(e)}>
          <option value='All pokemons'>All pokemons</option>
          {
            typePokemon?.map(type => (
              <option key={type.name} value={type.name}>{type.name}</option>
            ))
          }
        </select>
        <img
          className='config-icon'
          src={settingIcon}
          alt="icon setting"
          onClick={() => setIsVisible(true)}
        />
      </form>
    </aside>
  )
}

export default FormList