import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import pokeEmpty from '../assets/pokeball-empty.png'
import zubat from '../assets/icon-zubat.png'
import psyduck from '../assets/icon-psyduck.png'

const Error = () => {

  return (
    <div className='error-container'>
      <h2 className='error-sorry'>Sorry!</h2>
      <ul className='list-error'>
        <li className='error-404'>4</li>
        <li className='img-404'><img src={pokeEmpty} alt='img pokeball empty' /></li>
        <li className='error-404'>4</li>
      </ul>
      <ul className='not-found-container'>
        <li className=''><img className='img-pokemon-error' src={zubat} alt="zubat" /></li>
        <li className='container-btn-notfound'>
          <p className='not-found'>Pokemon not found</p>
        </li>
        <li><img className='img-pokemon-error' src={psyduck} alt="psyduck" /></li>
      </ul>
    </div>
  )
}

export default Error