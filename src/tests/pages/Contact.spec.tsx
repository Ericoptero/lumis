import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Contact } from '../../pages/Contact';

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  NavLink: ({ children }: { children: React.ReactNode }) => children
}))

describe('Contact Page', () => {
  it('renders correctly', () => {
    render(<Contact />)

    expect(screen.getByText(/Entre em contato com a Lumis/i)).toBeInTheDocument();
  })

  it('displays error when submit button has been pressed', async () => {
    render(<Contact />)
    
    const submitButton = screen.getByText('Enviar')
    fireEvent.click(submitButton)

    const errors = await waitFor(() => screen.getAllByTestId('error'))

    expect(errors).toHaveLength(3);
    expect(errors[0]).toBeInTheDocument();
  })
})