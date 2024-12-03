import styled from 'styled-components';
import pedro1 from '../../assets/pictures/pedro-sentado.jpg';
import pedro2 from '../../assets/pictures/pedro-cruzado.jpg';
import pedro3 from '../../assets/pictures/pedro-frente.jpg';
import pedro4 from '../../assets/pictures/pedro-frente1.jpg';

import vitor1 from '../../assets/pictures/vitor-frente.jpg';
import vitor2 from '../../assets/pictures/vitor-lado.jpg';
import vitor3 from '../../assets/pictures/vitor-pc.jpg';
import vitor4 from '../../assets/pictures/vitor-sentado.jpg';

import juntos from '../../assets/pictures/lado-lado.jpg';

const Container = styled.section`
  padding: 4% 7%;
  margin-top: 150px;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color.primary || '#333'};
`;

const PartnerSection = styled.div`
  margin-top: 50px;
`;

const PartnerTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: ${(props) => props.theme.color.primary || '#333'};
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color.secundary || '#555'};
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const TogetherSection = styled.div`
  margin-top: 50px;
  text-align: center;

  img {
    max-width: 600px;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>Nosso Escritório</Title>
      <Description>
        Conheça os profissionais que estão à frente do nosso escritório. Com
        experiência, dedicação e ética, Pedro e Vitor trabalham em sinergia para
        oferecer a melhor assessoria jurídica.
      </Description>

      {/* Seção do Pedro */}
      <PartnerSection>
        <PartnerTitle>Pedro</PartnerTitle>
        <Description>
          Pedro é especialista em Direito Empresarial e Contratual. Com uma
          abordagem estratégica, busca sempre soluções práticas e eficientes
          para seus clientes.
        </Description>
        <PhotoGrid>
          <img src={pedro1} alt="Pedro 1" />
          <img src={pedro2} alt="Pedro 2" />
          <img src={pedro3} alt="Pedro 3" />
          {/* <img src={pedro4} alt="Pedro 4" /> */}
        </PhotoGrid>
      </PartnerSection>

      {/* Seção do Vitor */}
      <PartnerSection>
        <PartnerTitle>Vitor</PartnerTitle>
        <Description>
          Vitor é referência em Direito Civil e Trabalhista, sempre buscando
          garantir os direitos de seus clientes com ética e transparência.
        </Description>
        <PhotoGrid>
          <img src={vitor1} alt="Vitor 1" />
          <img src={vitor2} alt="Vitor 2" />
          {/* <img src={vitor3} alt="Vitor 3" /> */}
          <img src={vitor4} alt="Vitor 4" />
        </PhotoGrid>
      </PartnerSection>

      {/* Seção com a foto de ambos juntos */}
      <TogetherSection>
        <PartnerTitle>Juntos, construindo o futuro do Direito</PartnerTitle>
        <img src={juntos} alt="Pedro e Vitor Juntos" />
      </TogetherSection>
    </Container>
  );
};

export default About;
