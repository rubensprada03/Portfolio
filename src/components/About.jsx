import { motion } from "framer-motion";
import styled from "styled-components";
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';


const AboutContainer = styled.div`
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 5rem 0;
  text-align: center;
  font-size: 2.25rem;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const ImageSection = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
    padding: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutImage = styled.img`
  border-radius: 1rem;
`;

const TextSection = styled(motion.div)`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Text = styled.p`
  margin: 0.5rem 0;
  max-width: 40rem;
  padding: 1.5rem 0;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>Sobre Mim</Title>
      <ContentWrapper>
        <ImageSection>
          <ImageContainer
                  whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.5 }}>
            <AboutImage src={aboutImg} alt="Sobre Mim" />
          </ImageContainer>
        </ImageSection>
        <TextSection
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <TextContainer>
            <Text>{ABOUT_TEXT}</Text>
          </TextContainer>
        </TextSection>
      </ContentWrapper>
    </AboutContainer>
  );
}

export default About;
