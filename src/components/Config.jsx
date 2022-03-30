import React from 'react'

const Config = ({pokemonPerPage, setPokemonPerPage}) => {
  return (
    <article className='config-container'>
      <h2 className='title-config'>Setting</h2>
      <div className='toggle-container'>
        <h3 className='title-toggle'>light / Dark mode</h3>
        <div className='toggle-btn-container'>
          <div className='toggle-btn'></div>
        </div>
      </div>
      <div className='poke-per-page-container'>
        <h3>Pokemon per page</h3>
        <select
          defaultValue={pokemonPerPage}
          onChange={e => setPokemonPerPage(e.target.value)}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
      </div>
    </article>
  )
}

export default Config