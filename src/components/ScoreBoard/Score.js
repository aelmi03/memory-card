import styled from "styled-components";

const Score = ({ text, margin }) => {
  return <ScoreWrapper margin={margin}>{text}</ScoreWrapper>;
};
const ScoreWrapper = styled.div`
  padding: 1rem 3.5rem;
  font-family: "Exo", cursive;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.8rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 23rem;
  text-align: center;
  margin: 2rem;
`;

export default Score;
