import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = (props) => {
  return (
    <FooterWrapper>
      <p>Copyright © 2021 aelmi03</p>
      <LinkWrapper href="https://github.com/aelmi03/memory-card">
        <FaGithub />
      </LinkWrapper>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryText};
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
`;

const LinkWrapper = styled.a`
  color: ${({ theme }) => theme.colors.primaryText};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;
export default Footer;
