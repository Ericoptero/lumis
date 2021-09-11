import { render, screen } from '@testing-library/react';
import { Button } from '../../components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>);

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('changes attribute in children if it has been sended in props', () => {
    render(<Button type="submit">Test Button</Button>);

    expect(screen.getByText('Test Button')).toHaveAttribute('type', 'submit')
  });
})