import styled from 'styled-components';
import pedro1 from '../../assets/pictures/pedro-sentado.jpg';
import pedro2 from '../../assets/pictures/pedro-cruzado.jpg';
import pedro3 from '../../assets/pictures/pedro-frente.jpg';

import vitor1 from '../../assets/pictures/vitor-frente.jpg';
import vitor2 from '../../assets/pictures/vitor-lado.jpg';
import vitor4 from '../../assets/pictures/vitor-sentado.jpg';

// import juntos from '../../assets/pictures/lado-lado.jpg';

import LawyerCard from '../../components/LawyerCard';

// Estilização principal
const Container = styled.section`
  padding: 2% 7%;
  margin-top: 120px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* font-family: 'Roboto', sans-serif; */
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.color.primary || '#222'};
  @media(max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.color.secundary || '#555'};
  margin: 0 auto 40px;
  @media(max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CardContainer = styled.div`
  display: flex;

  @media(max-width: 1121px) {
    flex-direction: column;
  }
`

// const TogetherSection = styled.div`
//   margin-top: 80px;
//   text-align: center;

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 20px;
//     color: ${(props) => props.theme.color.primary || '#222'};
//   }

//   img {
//     width: 50%;
//     max-width: 400px;
//     border-radius: 15px;
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
//     margin-top: 20px;
//   }
// `;

const WhatsAppButton = styled.a`
  display: inline-block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ebc59;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>Nosso Escritório</Title>
      <Description>
        Resende & Fernandes Sociedade de Advogados, registrado na OAB/MG sob o n. 15736, é um escritório de advocacia com sede na cidade de Araguari – Minas Gerais. Nossa equipe é composta por profissionais altamente qualificados, preparados para oferecer soluções jurídicas personalizadas e estratégicas, sempre focando nos melhores resultados para nossos clientes e parceiros.

        Nosso foco está em Direito Cível, Direito Trabalhista e Direito Previdenciário, com especial atenção a pessoas físicas, pequenas empresas e profissionais liberais. A experiência acumulada em negociações, litígios e consultoria jurídica nos permite atuar com eficiência, proporcionando segurança e clareza em cada decisão.
        <br />
        <br />
        Nosso diferencial:
        <br />
        <br />
        <ul>
          <li>
            Atendimento personalizado e humanizado, entendendo a singularidade de cada cliente.
          </li>
          <li>
            Soluções jurídicas práticas e assertivas, sempre alinhadas aos objetivos estratégicos de quem nos confia seus desafios.
          </li>
          <li>
            Planejamento jurídico inovador e eficaz, com foco em resultados concretos e sustentáveis.
          </li>
          <li>
            Conte conosco para transformar desafios jurídicos em oportunidades, com ética, transparência e excelência!
          </li>
        </ul>
      </Description>
      <WhatsAppButton
        href="https://wa.me/+5534988996340?text=Olá! Gostaria de saber mais sobre os serviços do escritório."
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco no WhatsApp
      </WhatsAppButton>
      <CardContainer>
        <LawyerCard
          name="Pedro Resende"
          description="Advogado inscrito na OAB/MG sob o nº X.XXX, é especialista em Direito Empresarial e Contratual, com ampla experiência em assessoria jurídica para empresas de diversos portes e segmentos. Sua atuação se destaca pelo profundo conhecimento na estruturação e revisão de contratos, negociações estratégicas e planejamento jurídico voltado para a mitigação de riscos e maximização de oportunidades."
          images={[pedro1, pedro2, pedro3]}
        />
        <LawyerCard
          name="Vitor Fernandes"
          description="Advogado inscrito na OAB/MG sob o nº X.XXX, é referência em Direito Civil e Trabalhista, atuando com excelência na defesa dos direitos de seus clientes em demandas judiciais e consultorias preventivas. Possui sólida experiência na resolução de conflitos envolvendo contratos, relações de consumo, indenizações e disputas trabalhistas, atendendo tanto pessoas físicas quanto empresas."
          images={[vitor1, vitor2, vitor4]}
        />
      </CardContainer>
      {/* <TogetherSection>
        <h2>Juntos, construindo o futuro do Direito</h2>
        <img src={juntos} alt="Pedro e Vitor juntos" />
      </TogetherSection> */}

    </Container>
  );
};

export default About;
