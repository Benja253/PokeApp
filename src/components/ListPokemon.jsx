import React, { useEffect, useState } from 'react'
import FormList from './FormList'
import HeaderPokemon from './HeaderPokemon'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Config from './Config'
import Pagination from './Pagination'
import ChargingPage from './ChargingPage'

const ListPokemon = () => {

  const [typeTarget, setTypeTarget] = useState('All pokemons')
  const [pokemonTarget, setPokemonTarget] = useState()
  const [pokemonsUrl, setPokemonsUrl] = useState()
  const [page, setPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(8)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisiblePagination, setIsVisiblePagination] = useState(true)

  const getPokemons = (offset = 0, limit = pokemonPerPage) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then(({data}) => setPokemonsUrl(data.results))
  }

  useEffect(() => {
    if(typeTarget === 'All pokemons' && !pokemonTarget){
      getPokemons(0, 1126)
      setPage(1)
    } else if(!pokemonTarget) {
      axios.get(`https://pokeapi.co/api/v2/type/${typeTarget}`)
        .then(({data}) => setPokemonsUrl(data?.pokemon))
      setPage(1)
    } else {
      setPokemonsUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonTarget}`)
      setPage(1)
    }
  },[typeTarget, pokemonTarget])

  let pokemonArray
  if(pokemonsUrl?.length < pokemonPerPage){
    pokemonArray = [...pokemonsUrl]
  } else{
    const lastPokemon = page * pokemonPerPage
    pokemonArray = pokemonsUrl?.slice(lastPokemon - pokemonPerPage, lastPokemon)
  }
  
  const cantPage = Math.ceil(pokemonsUrl?.length / pokemonPerPage)
  const pagePagination = Math.floor((page - 1) / 5)
  let arrayPages = []
  if((pagePagination + 1) * 5 > cantPage){
    for(let i = pagePagination * 5 + 1; i <= cantPage ; i++){
      arrayPages.push(i)
    }
  } else {
    for(let i = pagePagination * 5 + 1 ; i <= (pagePagination + 1) * 5; i++){
      arrayPages.push(i)
    }
  }
  
  return (
    <div className='list-pokemon-component'>
      <HeaderPokemon setIsVisible={setIsVisible} />
      <FormList
        setTypeTarget={setTypeTarget}
        setPokemonTarget={setPokemonTarget}
        setIsVisible={setIsVisible}
        setIsVisiblePagination={setIsVisiblePagination}
      />
      {
        isVisible &&
        <Config
          setPokemonPerPage={setPokemonPerPage}
          pokemonPerPage={pokemonPerPage}
          setIsVisible={setIsVisible}
          setPage={setPage}
        />
      }
      {
        isVisiblePagination &&
        <Pagination
          arrayPages={arrayPages}
          setPage={setPage}
          page={page}
          cantPage={cantPage}
        />
      }
      <div className="card-container">
        {
          typeof pokemonsUrl === 'string' ?
            <PokemonCard pokemonsUrl={pokemonsUrl} url={pokemonsUrl} />
          :
            pokemonArray?.map(pokemon => (
              pokemon.pokemon ?
                <PokemonCard key={pokemon?.pokemon.url} url={pokemon?.pokemon.url} />
              :
                <PokemonCard key={pokemon.url} url={pokemon.url} />
            ))
        }
      </div>
      {
        isVisiblePagination &&
        <Pagination
          arrayPages={arrayPages}
          setPage={setPage}
          page={page}
          cantPage={cantPage}
        />
      }
    </div>
    
  )
}

export default ListPokemon