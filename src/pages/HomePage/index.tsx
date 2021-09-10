import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { GameCard } from "../../components/GameCard";

import { 
  MainSection,
  Content,
  SearchContainer,
  GamesList,
  NotFound
} from "./styles";

interface GameProps {
  id: number,
  game: string,
  price: number,
  description: string,
  image: string,
}

export function HomePage() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [filteredGames, setFilteredGames] = useState<GameProps[]>([]);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    async function fetchGames() {
      try {
        const { data } = await api.get('games');

        setGames(data);
      } catch(e) {
        console.log(e);
      }
    }

    fetchGames();
  }, [])

  useEffect(() => { 
    const filtered = games.filter(game => 
      game.game.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredGames(filtered);
  }, [games, filter])

  return (
    <>
      <Header />

      <MainSection>
        <Content>
          <SearchContainer>
            <input 
              type="text" 
              placeholder="Pesquise aqui o seu jogo de Playstation 4" 
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
          </SearchContainer>
          
          {filteredGames.length !== 0 ? (
            <GamesList>
              {filteredGames
                .map(game => <GameCard key={game.id} game={game} />)}
            </GamesList>
          ) : (
            <NotFound>
              <p>
                Não foi possível encontrar nenhum jogo
                {filter ? <> com: <span>{filter}</span></> : '.'}
              </p>
            </NotFound>
          )}
        </Content>
      </MainSection>
    </>
  );
}