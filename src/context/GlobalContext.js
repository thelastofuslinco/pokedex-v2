import React, { useEffect } from 'react'
import usePokedex from '../hooks/usePokedex'
import usePokemon from '../hooks/usePokemon'

export const GlobalStateContext = React.createContext()

export function GlobalState ({ children }) {
  //  Hooks
  const {
    pokemons,
    loading,
    error,
    page,
    requestNextPage,
    requestPreviousPage,
    getData
  } = usePokemon()
  const {
    pokedex,
    setPokedex,
    requestAddToPokedex,
    requestRemoveFromPokedex
  } = usePokedex()

  //  Requests
  const nextPage = () => requestNextPage(pokedex)
  const previousPage = () => requestPreviousPage(pokedex)
  const addToPokedex = pokemon => requestAddToPokedex({ pokemon, setPokedex })
  const removeFromPokedex = pokemon =>
    requestRemoveFromPokedex({ pokemon, setPokedex, pokedex })
  // UseEffects
  useEffect(() => {
    getData({ pokedex })
  }, [])

  const data = {
    pokemons,
    loading,
    error,
    page,
    nextPage,
    previousPage,
    pokedex,
    addToPokedex,
    removeFromPokedex
  }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  )
}
