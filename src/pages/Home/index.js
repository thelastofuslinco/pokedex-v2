import { useContext } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { GlobalStateContext } from '../../context/GlobalContext'

const Home = () => {
  const {
    pokemons,
    pokedex,
    page,
    nextPage,
    previousPage,
    addToPokedex
  } = useContext(GlobalStateContext)

  return (
    <>
      <Header />
      <Main pokemons={pokemons} pokedex={pokedex} addToPokedex={addToPokedex} />
      <Footer previousPage={previousPage} nextPage={nextPage} page={page} />
    </>
  )
}

export default Home
