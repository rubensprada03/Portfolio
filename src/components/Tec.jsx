import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import styled from "styled-components";

const TecContainer = styled.div`
  border-bottom: 1px solid #2c2c2c;
  padding-bottom: 6rem;
`;

const Title = styled.h2`
  margin: 5rem 0;
  text-align: center;
  font-size: 2.25rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const TechCard = styled.div`
  border: 4px solid #2c2c2c;
  border-radius: 1rem;
  padding: 1rem;
`;

const ReactIcon = styled(RiReactjsLine)`
  font-size: 4.375rem; 
  color: #06b6d4; 
`;

const NodeIcon = styled(FaNodeJs)`
  font-size: 4.375rem; 
  color: #22c55e; 
`;

const Tec = () => {
  return (
    <TecContainer>
      <Title>Tecnologias</Title>
      <IconWrapper>
        <TechCard>
          <ReactIcon />
        </TechCard>
        <TechCard>
          <NodeIcon />
        </TechCard>
      </IconWrapper>
    </TecContainer>
  );
}

export default Tec;
