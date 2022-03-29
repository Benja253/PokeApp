import React, { useEffect, useState } from 'react'
import FormList from './FormList'
import HeaderPokemon from './HeaderPokemon'
import axios from 'axios'
import PokemonCard from './PokemonCard'

const ListPokemon = () => {

  const [typeTarget, setTypeTarget] = useState('All pokemons')
  const [pokemonTarget, setPokemonTarget] = useState()
  const [pokemonsUrl, setPokemonsUrl] = useState()

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
      .then(({data}) => setPokemonsUrl(data.results))
  }

  

  useEffect(() => {
    if(typeTarget === 'All pokemons'){
      getPokemons()
    }
    else {
      axios.get(`https://pokeapi.co/api/v2/type/${typeTarget}`)
        .then(({data}) => setPokemonsUrl(data?.pokemon))
    }
  },[typeTarget])

  return (
    <>
      <HeaderPokemon />
      <FormList
        setTypeTarget={setTypeTarget}
        setPokemonTarget={setPokemonTarget}
      />
      <div className="card-container">
        {
          pokemonsUrl?.map(pokemon => (
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