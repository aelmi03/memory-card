import styled from "styled-components";

const GameOverScreen = ({ currentScore, highScore, onClick }) => {
  let text = `You have lost with a score of ${currentScore}!`;
  if (highScore === currentScore) {
    text = `Congratulations you have gotten a high score of ${currentScore}!`;
  }
  return (
    <GameOverScreenWrapper>
      <TextWrapper>{text}</TextWrapper>
      <ButtonWrapper onClick={onClick}>{`New Game`}</ButtonWrapper>
    </GameOverScreenWrapper>
  );
};

const GameOverScreenWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 9rem 5rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  justify-content: center;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.6);
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
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const ButtonWrapper = styled.button`
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: 2px solid ${({ theme }) => theme.colors.primaryText};
  padding: 1.5rem 5rem;
  font-size: 2rem;
  font-family: "Black Ops One", cursive;
  margin-top: 5rem;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  transition: all 0.5s ease-in-out;
  text-shadow: 1.5px 1.5px ${({ theme }) => theme.colors.secondaryLight};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    z-index: -1;
    transform-origin: left;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondaryText};
  }
  &:hover::before {
    transform: scaleX(1);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondaryLight};
    text-shadow: 1.5px 1.5px ${({ theme }) => theme.colors.primaryLight};
  }
`;
export default GameOverScreen;
