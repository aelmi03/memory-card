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
  @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
  display: flex;
  font-family: "Staatliches", cursive;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 25rem;
`;
export default Header;
