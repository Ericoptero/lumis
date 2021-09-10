import { Header } from "../../components/Header";
import { GameCard } from "../../components/GameCard";

import { MainSection, Content, SearchContainer, GamesList } from "./styles";

export function HomePage() {
  return (
    <>
      <Header />

      <MainSection>
        <Content>
          <SearchContainer>
            <input type="text" placeholder="Pesquise aqui o seu jogo de Playstation 4" />
          </SearchContainer>

          <GamesList>
            <GameCard />
            <GameCard />
            <GameCard />
          </GamesList>
        </Content>
      </MainSection>
    </>
  );
}