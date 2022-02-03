import { Link } from 'react-router-dom'
import { FooterContainer } from './styles'

const Footer = ({ previousPage, nextPage, page }) => {
  return (
    <FooterContainer>
      {' '}
      <button onClick={previousPage} disabled={page.previous ? false : true}>
        previous{' '}
      </button>
      <button onClick={nextPage} disabled={page.next ? false : true}>
        next{' '}
      </button>
      <button>
        <Link to='Pokedex'>Pokedex</Link>
      </button>
    </FooterContainer>
  )
}

export default Footer
