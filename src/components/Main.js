import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";

const Main = (props) => {
  return (
    <MainWrapper>
      <ScoreBoard />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default Main;
