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
`;
const RoundWrapper = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;

const ScoresWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 90%;
  margin-top: 3rem;
`;
export default ScoreBoard;
