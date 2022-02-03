import Card from '../Card'
import { MainContainer } from './styles'

const Main = ({ pokemons, pokedex, addToPokedex }) => {
  return (
    <MainContainer>
      {pokemons
        .filter(pokemon => (pokedex.includes(pokemon) ? false : true))
        .map((pokemon, index) => {
          return (
            <Card
              key={index}
              pokemon={pokemon}
              onClick={() => addToPokedex(pokemon)}
            />
          )
        })}
    </MainContainer>
  )
}

export default Main
