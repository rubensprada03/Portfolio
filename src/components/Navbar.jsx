import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styled from "styled-components";
import logo from "../assets/Rap.png";

const NavbarContainer = styled.nav`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

const LogoImage = styled.img`
  margin: 0 8px;
  width: 60px;
`;

const IconsContainer = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 2rem;
`;

const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #0072b1; /* Cor de hover para LinkedIn, por exemplo */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage width={150} height={150} src={logo} alt="Logo" />
      </LogoContainer>
      <IconsContainer>
        <IconLink href="www.linkedin.com/in/rubens-arini-prada-6a29871a6" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/rubensprada03" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </IconLink>
        <IconLink href="https://www.instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
