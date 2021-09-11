import { Button } from '../Button'
import { GameProps } from '../../pages/HomePage';

import { Container, Wrapper, GameImage, Content } from './styles';

interface GameCardProps {
  game: GameProps;
  handleOpenModal: () => void;
}

export function GameCard({ game, handleOpenModal }: GameCardProps) {
  return (
    <Container>
      <Wrapper>
        <GameImage src={game.image} />
        <Content>
          <h2>{game.game}</h2>
          <p>{game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </Content>
      </Wrapper>
      <Button type="button" onClick={handleOpenModal}>Sobre</Button>
    </Container>
  );
}