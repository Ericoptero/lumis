import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header';

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  NavLink: ({ children }: { children: React.ReactNode }) => children
}))

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
})