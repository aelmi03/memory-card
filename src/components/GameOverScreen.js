import styled from "styled-components";

const GameOverScreen = ({ currentScore }) => {
  return (
    <GameOverScreenWrapper>
      <TextWrapper>{`You lost with a score of ${currentScore}`}</TextWrapper>
      <ButtonWrapper>{`New Game`}</ButtonWrapper>
    </GameOverScreenWrapper>
  );
};

const GameOverScreenWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 9rem 5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  justify-content: center;
  align-items: center;
  width: 30%;
  min-width: 30rem;
  margin-top: 8rem;
`;

const TextWrapper = styled.h3`
  font-weight: bold;
  font-size: 2.3rem;
  text-align: center;
  font-family: "Exo", cursive;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const ButtonWrapper = styled.button`
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  padding: 0.9rem 5rem;
  font-size: 2rem;
  font-family: "Black Ops One", cursive;
  margin-top: 5rem;
  border-radius: 10px;
`;
export default GameOverScreen;
