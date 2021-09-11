import { useCallback } from 'react';
import { GameProps } from '../../pages/HomePage';
import { Button } from '../Button';

import { Container, ModalContainer, Content } from './styles';

interface ModalProps {
  handleClose: () => void;
  game: GameProps;
}

export function Modal ({ handleClose, game }: ModalProps) {
  const handleCloseOutsideModal = useCallback((e) => {
    if (game.id === Number(e.target.id))
      handleClose();
  }, [game.id, handleClose]);

  return (
    <Container 
      id={String(game.id)} 
      data-testid='game-id' 
      onClick={(e) => handleCloseOutsideModal(e)}
    >
      <ModalContainer>
        <Content>
          <img src={game.image} alt={game.game} />

          <h2>{game.game}</h2>
          <p>{game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <p>{game.description}</p>

          <Button onClick={handleClose}>Fechar</Button>
        </Content>
      </ModalContainer>
    </Container>
  )
}