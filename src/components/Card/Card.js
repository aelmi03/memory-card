import styled from "styled-components";

const Card = ({ name, imageURL }) => {
  return (
    <CardWrapper>
      <ImageWrapper
        src={imageURL}
        alt={`Anime drawing depicting the character`}
      />
      <NameWrapper>{name}</NameWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryText};
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 35%) 5px 5px 15px;
  transition: transform 0.3s ease-in-out;
  border: solid 2px ${({ theme }) => theme.colors.primaryLight};
  &:hover {
    transform: scale(1.15);
    box-shadow: ${({ theme }) => theme.colors.primaryLight} 0px 10px 20px;
  }
`;

const ImageWrapper = styled.img`
  width: 22rem;
  height: auto;
  height: 18rem;
  margin-bottom: 1rem;
`;

const NameWrapper = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Exo", cursive;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.primaryLight};
`;
export default Card;
