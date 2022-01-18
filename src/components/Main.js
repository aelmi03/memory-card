import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import animeCharacters from "../Utils/AnimeCharacters";
import Card from "./Card";
import GameOverScreen from "./GameOverScreen";
import React from "react";
import { useState } from "react";
import { shuffleArray, getUniqueItemsFromArray } from "../Utils/utils";

const Main = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [characters, setCharacters] = useState(
    getUniqueItemsFromArray(animeCharacters, 3)
  );
  const [hasWon, setHasWon] = useState(false);
  const successfulClick = (animeObject) => {
    setCharacters((characters) => shuffleArray(characters));
    setSelectedCharacters((selectedCharacters) => {
      return [...selectedCharacters, animeObject];
    });
  };
  const startNewGame = () => {
    setIsGameOver(false);
    setHasWon(false);
    setCurrentScore(0);
    setSelectedCharacters([]);
    setCharacters(getUniqueItemsFromArray(animeCharacters, 3));
    setRound(1);
  };
  const startNewRound = () => {
    setRound((round) => round + 1);
    setSelectedCharacters([]);
    setCharacters(
      getUniqueItemsFromArray(animeCharacters, characters.length + 1)
    );
  };
  const handleCardClick = (animeObject) => {
    if (selectedCharacters.includes(animeObject)) {
      setIsGameOver(true);
    } else {
      if (currentScore + 1 > highScore) {
        setHighScore(currentScore + 1);
      }
      setCurrentScore((currentScore) => currentScore + 1);
      if (selectedCharacters.length + 1 === characters.length) {
        if (characters.length === animeCharacters.length) {
          setHasWon(true);
          setIsGameOver(true);
        } else {
          startNewRound();
        }
      } else {
        successfulClick(animeObject);
      }
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
      {isGameOver ? (
        <GameOverScreen
          currentScore={currentScore}
          onClick={startNewGame}
          highScore={highScore}
          hasWon={hasWon}
        />
      ) : (
        <React.Fragment>
          <ScoreBoard
            currentScore={currentScore}
            highScore={highScore}
            round={round}
          />
          <CardWrapper>{cards}</CardWrapper>
        </React.Fragment>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  flex-grow: 1;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: space-evenly;
`;
export default Main;
