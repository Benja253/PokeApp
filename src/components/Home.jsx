import { useState } from 'react'
import pokedexLetters from '../assets/logo-pokedex.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [ inputTrainer, setInputTrainer ] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const submit = e => {
    e.preventDefault()
    dispatch({
      type: 'CHANGE_NAME',
      payload: inputTrainer
    })
    navigate('/pokemon')
  }

  return (
    <article className='home'>
      <header className='header-home'>
        <img
          className='img-pokedex-logo'
          src={pokedexLetters}
          alt="image pokedex letters" 
        />
        <h1 className='title-home'>Hi trainer!</h1>
        <p className="description-home">
          to see the information of the pokemon tell me your trainer name.
        </p>
      </header>
      <form className='form-home' onSubmit={e => submit(e)}>
        <input
          className='input-home'
          type="text"
          placeholder='Enter your trainer name.' 
          onChange={e => setInputTrainer(e.target.value)}
        />
        <button className='btn-home'>Let start</button>
      </form>
      <div className='rectangle-red'>
        <div className='rectangle-black'></div>
        <div className='circle'></div>
      </div>
    </article>
  )
}

export default Home