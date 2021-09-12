import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { api } from '../../services/api';
import { HomePage } from '../../pages/HomePage';

jest.mock('../../services/api')

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  NavLink: ({ children }: { children: React.ReactNode }) => children
}))

const fakeGames = [
  { 
    "id": 1,
    "game": "God of War 4", 
    "price": 60,
    "description": "fake-description",
    "image": "fake-image"
  },
  {
    "id": 2,
    "game": "Call Of Duty Warzone", 
    "price": 0,
    "description": "fake-description",
    "image": "fake-image"
  }
]

describe('HomePage Page', () => {
  it('renders correctly', () => {
    render(<HomePage />)

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  })

  it('displays a list of games', async () => {
    api.get = jest.fn().mockReturnValueOnce({ data: fakeGames })
    render(<HomePage />)

    expect(screen.getByText('Não foi possível encontrar nenhum jogo.')).toBeInTheDocument();

    const gameItem = await waitFor(() => screen.getByText('God of War 4'))

    expect(gameItem).toBeInTheDocument();
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('games');
  })

  it('opens a modal, checks the content and closes', async () => {
    api.get = jest.fn().mockReturnValueOnce({ data: fakeGames })

    render(<HomePage />);

    // Opens the first element
    const aboutButton = await waitFor(() => screen.getAllByText('Sobre'));
    fireEvent.click(aboutButton[0]);

    // Checks content
    const modal = await waitFor(() => screen.getByTestId('game-id'));
    expect(modal).toBeInTheDocument();
    expect(screen.getByText('fake-description')).toBeInTheDocument();

    // Closes
    fireEvent.click(screen.getByText('Fechar'));
    expect(modal).not.toBeInTheDocument();
  })

  it('checks the filter input', async () => {
    api.get = jest.fn().mockReturnValueOnce({ data: fakeGames })

    render(<HomePage />);

    // Checks if it finded the game
    const input = screen.getByPlaceholderText('Pesquise aqui o seu jogo de Playstation 4')
    fireEvent.change(input, { target: { value: 'Call Of Duty Warzone' }});

    const testCards = await waitFor(() => screen.getAllByTestId('gamecard'), {timeout: 1000});

    expect(screen.getAllByText('Sobre')).toHaveLength(1);
    expect(testCards[0]).toHaveTextContent(/Call Of Duty Warzone/i)

    // Checks game not found message
    fireEvent.change(input, { target: { value: 'not found game' }});

    expect(screen.getByText('not found game')).toBeInTheDocument()
  })
})