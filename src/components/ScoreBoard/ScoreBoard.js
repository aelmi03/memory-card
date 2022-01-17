import styled from "styled-components";
import Score from "./Score";

const ScoreBoard = ({ round, currentScore, highScore }) => {
  return (
    <ScoreBoardWrapper>
      <RoundWrapper>{`Round ${round}`}</RoundWrapper>
      <DescriptionWrapper>
        Don't click the same character twice in each round or you lose!
      </DescriptionWrapper>
      <ScoresWrapper>
        <Score text={`Current Score : ${currentScore}`} />
        <Score text={`High Score : ${highScore}`} />
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

const DescriptionWrapper = styled.h3`
  font-weight: bold;
  font-family: "Exo", cursive;
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
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
