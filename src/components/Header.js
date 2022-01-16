import styled from "styled-components";
import memoryImage from "../assets/memory.jpg";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <h1>Anime Memory Game</h1>
      <ImageWrapper>
        <img src={memoryImage} alt="Anime drawing" />
      </ImageWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  font-family: "Staatliches", cursive;
  flex-flow: row wrap;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 2.9rem;
  text-align: center;
`;

const ImageWrapper = styled.div`
  min-width: 30rem;
  width: 35%;
  max-width: 60rem;
`;
export default Header;
