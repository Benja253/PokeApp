import React, { useEffect, useState } from 'react'
import FormList from './FormList'
import HeaderPokemon from './HeaderPokemon'
import axios from 'axios'
import PokemonCard from './PokemonCard'

const ListPokemon = () => {

  const [typeTarget, setTypeTarget] = useState('All pokemons')
  const [pokemonTarget, setPokemonTarget] = useState()
  const [pokemonsUrl, setPokemonsUrl] = useState()
  const [ page, setPage ] = useState(1)
  const [ pokemonPerPage, setPokemonPerPage ] = useState(8)

  
  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
      .then(({data}) => setPokemonsUrl(data.results))
  }

  useEffect(() => {
    if(typeTarget === 'All pokemons' && !pokemonTarget){
      getPokemons()
    }
    else if(!pokemonTarget) {
      axios.get(`https://pokeapi.co/api/v2/type/${typeTarget}`)
        .then(({data}) => setPokemonsUrl(data?.pokemon))
    } else {
      setPokemonsUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonTarget}`)
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
  let arrayPages = []
  for(let i = 1; i <= cantPage; i++){
    arrayPages.push(i)
  }
  

  return (
    <>
      <HeaderPokemon />
      <FormList
        setTypeTarget={setTypeTarget}
        setPokemonTarget={setPokemonTarget}
        setPage={setPage}
        arrayPages={arrayPages}
        setPokemonPerPage={setPokemonPerPage}
        pokemonPerPage={pokemonPerPage}
      />
      <div className="card-container">
        {
          typeof pokemonsUrl === 'string' ?
            <PokemonCard url={pokemonsUrl} />
          :
            pokemonArray?.map(pokemon => (
              pokemon.pokemon ?
                <PokemonCard key={pokemon?.pokemon.url} url={pokemon?.pokemon.url} />
              :
                <PokemonCard key={pokemon.url} url={pokemon.url} />
            ))
        }
      </div>
    </>
    
  )
}

export default ListPokemon