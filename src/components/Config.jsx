import React, { useState } from 'react'

const Config = ({pokemonPerPage, setPokemonPerPage, setIsVisible, setPage}) => {

  const toggleBtnClick = e => {
    if(e.target.classList.contains('toggle-btn-container')){
      e.target.firstChild.classList.toggle('dark')
    } else {
      e.target.classList.toggle('dark')
    }
  }

  const changeSelectPokemonPerPage = e =>{
    setPokemonPerPage(e.target.value)
    setPage(1)
  }

  return (
    <div className={`config-modal`}>
      <article className='config-container'>
        <div className='equis' onClick={() => setIsVisible(false)}>x</div>
        <h2 className='title-config'>Setting</h2>
        <hr className='setting-hr' />
        <div className='toggle-container'>
          <h3 className='title-toggle'>Light / Dark mode</h3>
          <div className='toggle-btn-container' onClick={toggleBtnClick}>
            <div className='toggle-btn'></div>
          </div>
        </div>
        <div className='poke-per-page-container'>
          <h3 className='label-poke-per-page'>Pokemon per page</h3>
          <select
            className='select-config'
            defaultValue={pokemonPerPage}
            onChange={e => changeSelectPokemonPerPage(e)}>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
          </select>
        </div>
      </article>
    </div>
  )
}

export default Config