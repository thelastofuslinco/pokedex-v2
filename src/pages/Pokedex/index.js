import { useContext } from 'react'
import { GlobalStateContext } from '../../context/GlobalContext'

const Pokedex = () => {
  const { pokedex, removeFromPokedex } = useContext(GlobalStateContext)

  return (
    <div>
      {pokedex.length > 0 &&
        pokedex.map(pokemon => {
          return (
            <p onClick={() => removeFromPokedex(pokemon)}>{pokemon.name}</p>
          )
        })}
    </div>
  )
}

export default Pokedex
