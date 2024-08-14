import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styled from "styled-components";
import logo from "../assets/kevinRushLogo.png";

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
  width: 40px;
`;

const IconsContainer = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 2rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="" />
      </LogoContainer>
      <IconsContainer>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
