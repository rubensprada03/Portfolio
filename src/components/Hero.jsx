import styled from "styled-components";
import { HERO_CONTENT } from '../constants';

const HeroContainer = styled.div`
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 1rem;
  margin-bottom: 8.75rem;
`;

const HeroContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  padding-bottom: 4rem;
  font-size: 3.75rem;
  font-weight: 100;
  letter-spacing: -0.05em;
  @media (min-width: 1024px) {
    margin-top: 4rem;
    font-size: 5rem;
  }
`;

const Subtitle = styled.span`
  background: linear-gradient(270deg, #d63a7d, #64748b, #8b5cf6);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.25rem;
  letter-spacing: -0.05em;
  animation: gradientAnimation 6s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


const Description = styled.p`
  margin: 0.5rem 0;
  max-width: 40rem;
  padding: 1.5rem 0;
  font-weight: 300;
  letter-spacing: -0.025em;
`;

const RightSection = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
    padding: 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <LeftSection>
          <TextContainer>
            <Title>Rubens Prada</Title>
            <Subtitle>Full Stack Developer</Subtitle>
            <Description>{HERO_CONTENT}</Description>
          </TextContainer>
        </LeftSection>
        <RightSection>
          <ImageContainer>
            <img src="" alt="Rubens Prada" />
          </ImageContainer>
        </RightSection>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
