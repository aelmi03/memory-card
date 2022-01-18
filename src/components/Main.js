import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import animeCharacters from "../Utils/AnimeCharacters";
import Card from "./Card";
import { useState } from "react";
import { shuffleArray, getUniqueItemsFromArray } from "../Utils/utils";

const Main = (props) => {
  console.log("heo");
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [characters, setCharacters] = useState(
    getUniqueItemsFromArray(animeCharacters, 3)
  );
  const successfulClick = (animeObject) => {
    if (currentScore + 1 > highScore) {
      setHighScore(currentScore + 1);
    }
    setCharacters((characters) => shuffleArray(characters));
    setCurrentScore((currentScore) => currentScore + 1);
    setSelectedCharacters((selectedCharacters) => {
      return [...selectedCharacters, animeObject];
    });
  };
  const startNewGame = () => {
    setCurrentScore(0);
    setSelectedCharacters([]);
    setCharacters(getUniqueItemsFromArray(animeCharacters, 3));
    setRound(1);
  };
  const handleCardClick = (animeObject) => {
    if (selectedCharacters.includes(animeObject)) {
      startNewGame();
    } else {
      successfulClick(animeObject);
    }
  };

  const cards = characters.map((animeCharacter) => {
    return (
      <Card
        key={animeCharacter.id}
        imageURL={animeCharacter.imageURL}
        name={animeCharacter.name}
        id={animeCharacter.id}
        animeObject={animeCharacter}
        onClick={handleCardClick}
      />
    );
  });
  return (
    <MainWrapper>
      <ScoreBoard
        currentScore={currentScore}
        highScore={highScore}
        round={round}
      />
      <CardWrapper>{cards}</CardWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
`;
const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-evenly;
`;
export default Main;
