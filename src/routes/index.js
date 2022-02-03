import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

export const PokemonRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/pokedex'} element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}
