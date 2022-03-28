import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

const PokeApp = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<h1>Hola mundo</h1>}></Route>
          <Route path='/pokemon' element={<h2>PokeApp</h2>}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default PokeApp