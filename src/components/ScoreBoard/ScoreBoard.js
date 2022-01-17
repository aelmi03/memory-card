import styled from "styled-components";
import Score from "./Score";

const ScoreBoard = ({ round, currentScore, highScore }) => {
  return (
    <ScoreBoardWrapper>
      <RoundWrapper>{`Round ${round ? round : 1}`}</RoundWrapper>
      <ScoresWrapper>
        <Score text="Current Score : 1" />
        <Score text="High Score : 2" />
      </ScoresWrapper>
    </ScoreBoardWrapper>
  );
};

const ScoreBoardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
const RoundWrapper = styled.h2`
  font-weight: bold;
  font-size: 4rem;
  font-family: "Black Ops One", cursive;
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.secondaryLight};
`;

const ScoresWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 3rem;
  gap: 2rem;
`;
export default ScoreBoard;
