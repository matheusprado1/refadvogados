import styled from "styled-components";
import vitorPhoto from '../../assets/pictures/vitor-frente.jpg';
import pedroPhoto from '../../assets/pictures/pedro-cruzado.jpg'

// ESTILOS PRINCIPAIS
const Container = styled.section`
  padding: 1% 7%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: #FFFFFF;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #D9D2A6;
  margin-bottom: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const Content = styled.div`
  flex: 1;
  text-align: left;

  h2 {
    font-size: 2rem;
    color: #D9D2A6;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #D9D2A6;
  color: #1B1B1B;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFFFFF;
    color: #1B1B1B;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const About = () => {
  return (
    <Container>
      {/* TÍTULO DA PÁGINA */}
      <PageTitle>Nossos Especialistas</PageTitle>

      {/* SEÇÃO PEDRO RESENDE */}
      <Section>
        <img
          src={pedroPhoto}
          alt="Pedro Resende"
        />
        <Content>
          <h2>Dr. Pedro Resende</h2>
          <h3>Especialista em [Especialidade]</h3>
          <p>
            Dr. Pedro Resende é formado pela [universidade]  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed t
          </p>
          <p>
            Sua habilidade em resolver litígios de forma estratégica e ética o
            torna um dos advogados mais respeitados na área.
          </p>
        </Content>
      </Section>

      {/* SEÇÃO VITOR FERNANDES */}
      <Section reverse>
        <img
          src={vitorPhoto}
          alt="Vitor Fernandes"
        />
        <Content>
          <h2>Dr. Vitor Fernandes</h2>
          <h3>Especialista em [Especialidade]</h3>
          <p>
            Dr. Vitor Fernandes possui graduação pela Universidade
            Federal de Lavras (UFLA-MG)  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
          </p>
          <p>
            Com um olhar atento aos direitos fundamentais, Vitor é reconhecido
            pela sua firmeza e comprometimento na defesa dos interesses de seus
            clientes.
          </p>
        </Content>
      </Section>

      {/* BOTÃO FINAL */}
      <Button href="#contato">Fale com nossos especialistas</Button>
    </Container>
  );
};

export default About;
