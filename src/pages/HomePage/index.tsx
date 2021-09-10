import { Header } from "../../components/Header";

import { Container, MainSection, SearchContainer, GamesList } from "./styles";

export function HomePage() {
  return (
    <Container>
      <Header />
      <MainSection>
        <SearchContainer>
          <input type="text" placeholder="Pesquise aqui o seu jogo de Playstation 4" />
        </SearchContainer>
        <GamesList />
      </MainSection>
    </Container>
  );
}