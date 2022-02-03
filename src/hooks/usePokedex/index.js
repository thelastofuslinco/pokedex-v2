import { useState } from 'react'

const usePokedex = () => {
  const [pokedex, setPokedex] = useState([])
  const requestAddToPokedex = ({ pokemon, setPokedex }) => {
    setPokedex(data => [...data, pokemon])
  }

  const requestRemoveFromPokedex = ({ pokemon, setPokedex, pokedex }) => {
    const newPokedex = pokedex.filter(
      pokedexPokemon => pokedexPokemon.id !== pokemon.id
    )

    setPokedex(newPokedex)
  }

  return { requestAddToPokedex, requestRemoveFromPokedex, pokedex, setPokedex }
}

export default usePokedex
