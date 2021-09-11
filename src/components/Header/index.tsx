import { Container, Wrapper, StyledNavLink } from './styles';

import Logo from '../../assets/lumis.svg';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Lumis" />
        <nav>
          <StyledNavLink exact to="/" activeClassName="active-link">Home</StyledNavLink>
          <StyledNavLink to="/contact" activeClassName="active-link">Contato</StyledNavLink>
        </nav>
      </Wrapper>
    </Container>
  );
}