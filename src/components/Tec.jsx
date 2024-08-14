import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiCss3, SiFastapi, SiJavascript, SiMysql, SiPhp, SiPython, SiSass, SiWordpress } from "react-icons/si"; // Importando novos ícones
import styled from "styled-components";

const TecContainer = styled.div`
  border-bottom: 1px solid #2c2c2c;
  padding-bottom: 6rem;
`;

const Title = styled(motion.h2)`
  margin: 5rem 0;
  text-align: center;
  font-size: 2.25rem;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const TechCard = styled(motion.div)`
  border: 4px solid #2c2c2c;
  border-radius: 1rem;
  padding: 1rem;
`;

const ReactIcon = styled(RiReactjsLine)`
  font-size: 4.375rem; 
  color: #06b6d4; 
`;

const JavaScriptIcon = styled(SiJavascript)`
  font-size: 4.375rem; 
  color: #f7df1e; 
`;

const MySQLIcon = styled(SiMysql)`
  font-size: 4.375rem; 
  color: #00758f; 
`;

const PythonIcon = styled(SiPython)`
  font-size: 4.375rem; 
  color: #306998; 
`;

const CSSIcon = styled(SiCss3)`
  font-size: 4.375rem; 
  color: #264de4; 
`;

const SASSIcon = styled(SiSass)`
  font-size: 4.375rem; 
  color: #cd6799; 
`;

const WordPressIcon = styled(SiWordpress)`
  font-size: 4.375rem; 
  color: #21759b; 
`;

const FastAPIIcon = styled(SiFastapi)`
  font-size: 4.375rem; 
  color: #009688; 
`;

const PHPIcon = styled(SiPhp)`
  font-size: 4.375rem; 
  color: #8993be; 
`;

// Variants for the icons
const upVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const downVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tec = () => {
  return (
    <TecContainer>
      <Title
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Tecnologias
      </Title>
      <IconWrapper
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <TechCard
          variants={upVariants(2.5)} // Icone subindo
          initial="initial"
          animate="animate"
        >
          <JavaScriptIcon />
        </TechCard>
        <TechCard
          variants={downVariants(2.5)} // Icone descendo
          initial="initial"
          animate="animate"
        >
          <ReactIcon />
        </TechCard>
        <TechCard
          variants={upVariants(2.5)} // Icone subindo
          initial="initial"
          animate="animate"
        >
          <MySQLIcon />
        </TechCard>
        <TechCard
          variants={downVariants(2.5)} // Icone descendo
          initial="initial"
          animate="animate"
        >
          <PythonIcon />
        </TechCard>
        <TechCard
          variants={upVariants(2.5)} // Icone subindo
          initial="initial"
          animate="animate"
        >
          <CSSIcon />
        </TechCard>
        <TechCard
          variants={downVariants(2.5)} // Icone descendo
          initial="initial"
          animate="animate"
        >
          <SASSIcon />
        </TechCard>
        <TechCard
          variants={upVariants(2.5)} // Icone subindo
          initial="initial"
          animate="animate"
        >
          <WordPressIcon />
        </TechCard>
        <TechCard
          variants={downVariants(2.5)} // Icone descendo
          initial="initial"
          animate="animate"
        >
          <FastAPIIcon />
        </TechCard>
        <TechCard
          variants={upVariants(2.5)} // Icone subindo
          initial="initial"
          animate="animate"
        >
          <PHPIcon />
        </TechCard>
      </IconWrapper>
    </TecContainer>
  );
}

export default Tec;
