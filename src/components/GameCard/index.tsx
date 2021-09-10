import { Container, GameImage, Content, Button } from './styles';

interface GameProps {
  id: number,
  game: string,
  price: number,
  description: string,
  image: string,
}

export function GameCard({ game }: { game: GameProps}) {
  return (
    <Container>
      <GameImage src={game.image} />
      <Content>
        <h2>{game.game}</h2>
        <p>{game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
      </Content>
      <Button type="button">Sobre</Button>
    </Container>
  );
}