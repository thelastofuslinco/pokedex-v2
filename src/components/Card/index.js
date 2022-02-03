import { CardContainer, Image } from './styles'

const Card = ({ onClick, pokemon }) => {
  return (
    <CardContainer onClick={onClick}>
      <Image src={pokemon.image} />
      {pokemon.name}
    </CardContainer>
  )
}

export default Card
