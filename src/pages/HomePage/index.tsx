import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { GameCard } from "../../components/GameCard";
import { Modal } from "../../components/Modal";

import { 
  MainSection,
  Content,
  SearchContainer,
  GamesList,
  NotFound
} from "./styles";

export interface GameProps {
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameProps>({} as GameProps)

  const handleOpenModal = useCallback((game) => {
    setSelectedGame(game);
    setIsModalVisible(true);
  }, [])
  
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
            <Input 
              type="text" 
              placeholder="Pesquise aqui o seu jogo de Playstation 4" 
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
          </SearchContainer>
          
          {filteredGames.length !== 0 ? (
            <GamesList>
              {filteredGames
                .map(game => 
                  <GameCard 
                    key={game.id}
                    game={game}
                    handleOpenModal={() => handleOpenModal(game)}
                  />
                )}
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
        {isModalVisible && 
          <Modal 
            handleClose={() => setIsModalVisible(false)}
            game={selectedGame}
          />
        }
      </MainSection>
    </>
  );
}