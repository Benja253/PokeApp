import React from 'react'

const CardInfo = ({pokemonInfo}) => {
  
  return (
    <article className='card-info'>
      <header className='header-card-info'>
        <img
          className='srite-card-info'
          src={pokemonInfo && pokemonInfo.sprites.other['official-artwork'].front_default} alt={`sprite ${name}`}
        />
      </header>
      <section className='general-info-card-info'>
        <div className='id-general-info'>#{pokemonInfo?.id}</div>
        <h1 className='name-pokemon-card-info'>{pokemonInfo?.name}</h1>
        <ul className='height-weight-container'>
          <li className='height-weight'>
            <span className='span-height-weight'>Weight</span>
            {pokemonInfo?.weight}
          </li>
          <li className='height-weight'>
            <span className='span-height-weight'>Height</span>
            {pokemonInfo?.height}
          </li>
        </ul>
        <ul className='type-habilities-container'>
          <li className='type-habilities'>
            <span className='span-type'>Type</span>
            {
              pokemonInfo?.types.map(type => (
                type?.type && 
                <div
                  key={type.slot}
                  className={`type-${type.type.name}`}>
                  {type.type.name}
                </div>
              ))
            }
          </li>
          <li className='type-habilities'>
            <span className='span-ability'>Abilities</span>
            {
              pokemonInfo?.abilities.map(ability => (
                ability.ability && 
                <div
                  key={ability.slot}
                  className='ability-card-info'>
                  {ability.ability.name}
                </div>
              ))
            }
          </li>
        </ul>
      </section>
      <section className='stats-container-info'>
        <h2 className="title-section-stat">Stats</h2>
        <div className='stat-container-info'>
          {
            pokemonInfo?.stats.map(stat => (
              stat.stat.name &&
              <article className='stat-container-info' key={stat.stat.name}>
                <header className='name-number-stat-container'>
                  <h3 className='name-stat-info'>{stat.stat.name}</h3>
                  <p className='percent-stat'>{`${stat.base_stat}/255`}</p>
                </header>
                <div className='progress-bar-container'>
                  <div 
                    className='progress-stat'
                    style={{width: `${stat.base_stat * 100 /255}%`, transition: 'width 500ms ease'}}>  
                  </div>
                </div>
              </article>
            ))
          }
        </div>
        
      </section>
    </article>
  )
}

export default CardInfo