import './App.css'
import { GlobalState } from './context/GlobalContext'
import { PokemonRoutes } from './routes'

function App () {
  return (
    <GlobalState>
      <PokemonRoutes />
    </GlobalState>
  )
}

export default App
