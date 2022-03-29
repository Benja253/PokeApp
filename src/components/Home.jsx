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
          placeholder='Enter your trainer name.' 
          onChange={e => setInputTrainer(e.target.value)}
        />
        <button className='btn-home'>Submit</button>
      </form>
    </div>
  )
}

export default Home