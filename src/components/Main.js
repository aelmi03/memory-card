import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import animeCharacters from "../Utils/AnimeCharacters";
import Card from "./Card";

const Main = (props) => {
  const cards = animeCharacters.map((animeCharacter) => {
    return (
      <Card
        key={animeCharacter.id}
        imageURL={animeCharacter.imageURL}
        name={animeCharacter.name}
        id={animeCharacter.id}
      />
    );
  });
  return (
    <MainWrapper>
      <ScoreBoard />
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
