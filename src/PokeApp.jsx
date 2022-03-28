import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const PokeApp = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<h2>PokeApp</h2>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default PokeApp