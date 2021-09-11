import { render, screen } from '@testing-library/react';
import { Input } from '../../components/Input';

describe('Input Component', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test placeholder" />);

    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('changes attribute in children if it has been sended in props', () => {
    render(<Input type="radio" placeholder="Test placeholder" />);

    expect(screen.getByPlaceholderText('Test placeholder')).toHaveAttribute('type', 'radio')
  });
})