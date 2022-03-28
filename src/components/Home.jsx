import React from 'react'
import pokedexLetters from '../assets/logo-pokedex.png'
import { useSelector } from 'react-redux' 

const Home = () => {

  const trainerName = useSelector(state => state.trainerName)

  const submit = e => {
    e.preventDefault()
    console.log(e.target.firstChild.value)
  }

  return (
    <div className='home'>
      <img
        className='img-pokedex-logo'
        src={pokedexLetters}
        alt="image pokedex letters" 
      />
      <h2 className='title-home'>Hi Trainer!</h2>
      <p className="description-home">
        to see the information of the pokemon tell me your trainer name.
      </p>
      <form onSubmit={e => submit(e)}>
        <input
          className='input-home'
          type="text"
          placeholder='Enter your trainer name.' />
        <button className='btn-home'>Submit</button>
      </form>
    </div>
  )
}

export default Home