import { Container, Wrapper, StyledNavLink } from './styles';

import Logo from '../../assets/lumis.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img src={Logo} alt="Lumis" />
        </Link>
        <nav>
          <StyledNavLink exact to="/" activeClassName="active-link">Home</StyledNavLink>
          <StyledNavLink to="/contact" activeClassName="active-link">Contato</StyledNavLink>
        </nav>
      </Wrapper>
    </Container>
  );
}