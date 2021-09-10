import { Container, Wrapper, NavLink } from './styles';

import Logo from '../../assets/lumis.svg';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Lumis" />
        <nav>
          <NavLink href="/" isActive>Home</NavLink>
          <NavLink href="/contact">Contato</NavLink>
        </nav>
      </Wrapper>
    </Container>
  );
}