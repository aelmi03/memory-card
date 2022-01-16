import styled from "styled-components";

const Score = ({ text }) => {
  return <ScoreWrapper>{text}</ScoreWrapper>;
};

const ScoreWrapper = styled.div`
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 20px;
`;

export default Score;
