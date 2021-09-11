import { render, screen } from '@testing-library/react';
import { GameCard } from '../../components/GameCard';

describe('GameCard Component', () => {
  it('renders correctly', () => {
    render(
      <GameCard 
        game={{
          id: 1,
          game: 'God of War 4',
          price: 100,
          description: 'fake-description',
          image: 'fake-image',
        }} 
        handleOpenModal={() => {}}
      />
    );

    expect(screen.getByText('God of War 4')).toBeInTheDocument();
  });
})