import { Container, GameImage, Content, Button } from './styles';

export function GameCard() {
  return (
    <Container>
      <GameImage />
      <Content>
        <h2>Nome do jogo</h2>
        <p>Preço do jogo</p>
      </Content>
      <Button type="button">Sobre</Button>
    </Container>
  );
}