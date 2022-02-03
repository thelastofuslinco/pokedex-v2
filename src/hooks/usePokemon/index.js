import { useState } from 'react'
import Api from '../../services/Api'

const usePokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState({})
  const [error, setError] = useState({
    hasError: false
  })

  const getData = ({
    pokedex,
    request = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  }) => {
    setLoading(true)
    Api(request)
      .then(response => {
        setPage({ next: response.next, previous: response.previous })
        console.log(response)
        const data = response.results.map((result, index) => {
          const id = index + 1
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          return { ...result, image, id }
        })

        // for (const element of pokedex) {
        //   //  Add cathced
        //   data = data.filter(pokemon => pokemon.name !== element.name)
        // }

        setPokemons(data)
      })
      .catch(error => {
        setError({
          ...error,
          hasError: true
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const requestNextPage = pokedex => {
    const request = page.next
    if (request) getData({ pokedex, request })
  }

  const requestPreviousPage = pokedex => {
    const request = page.previous
    if (request) getData({ pokedex, request })
  }

  return {
    pokemons,
    setPokemons,
    loading,
    error,
    page,
    requestNextPage,
    requestPreviousPage,
    getData
  }
}

export default usePokemon
