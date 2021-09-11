import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../../components/Modal';

describe('Input Component', () => {
  it('renders correctly', () => {
    render(
      <Modal 
        handleClose={() => {}} 
        game={{
          id: 1,
          game: 'God of War 4',
          price: 100,
          description: 'fake-description',
          image: 'fake-image',
        }}  
      />
    );

    expect(screen.getByText('God of War 4')).toBeInTheDocument();
  });

  it('closes when close button is clicked', () => {
    const handleCloseMocked = jest.fn();

    render(
      <Modal 
        handleClose={handleCloseMocked} 
        game={{
          id: 1,
          game: 'God of War 4',
          price: 100,
          description: 'fake-description',
          image: 'fake-image',
        }}  
      />
    );

    const closeButton = screen.getByText('Fechar');

    fireEvent.click(closeButton);

    expect(handleCloseMocked).toHaveBeenCalled();
  });

  it('closes when outside background is clicked', () => {
    const handleCloseMocked = jest.fn();

    render(
      <Modal 
        handleClose={handleCloseMocked} 
        game={{
          id: 1,
          game: 'God of War 4',
          price: 100,
          description: 'fake-description',
          image: 'fake-image',
        }}  
      />
    );

    const backgroundDiv = screen.getByTestId('game-id');
    fireEvent.click(backgroundDiv);

    expect(handleCloseMocked).toHaveBeenCalled();
  });

  it('doesnt closes when content is clicked', () => {
    const handleCloseMocked = jest.fn();

    render(
      <Modal 
        handleClose={handleCloseMocked} 
        game={{
          id: 1,
          game: 'God of War 4',
          price: 100,
          description: 'fake-description',
          image: 'fake-image',
        }}  
      />
    );

    const contentDiv = screen.getByText('God of War 4');
    fireEvent.click(contentDiv);

    expect(handleCloseMocked).not.toHaveBeenCalled();
  });
})