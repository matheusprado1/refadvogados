import styled from "styled-components";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";

const Container = styled.section`
  padding: 2% 7%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 50px;

  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Info = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  font-size: 1.1rem; /* Aumente um pouco o tamanho */
  line-height: 1.8; /* Melhora a legibilidade */

  p {
    margin: 10px 0; /* Espaçamento maior entre linhas */
  }

  strong {
    font-weight: bold;
    color: #D9D2A6; /* Destaque para combinar com o design */
  }
`;

const MapFormContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centraliza no eixo vertical para telas menores */
  }

  & > div, iframe {
    flex: 1; /* Faz o formulário e o mapa ocuparem o mesmo espaço */
    width: 100%;
  }
`;

const StyledForm = styled.div`
  background-color: #1B1B1B; /* Fundo escuro para combinar com o tema */
  padding: 20px;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona leve sombra */
  flex: 1; /* Para que o tamanho se ajuste proporcionalmente */
`;

const StyledMap = styled.div`
  background-color: #1B1B1B;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
`;



const Contact = () => {
  return (
    <Container>
      <h2>Fale Conosco</h2>
      <Content>
        <Info>
          <p>
            <strong>Endereço:</strong> R. Cel. Lindolfo Rodrigues da Cunha, 101 - Rosário
          </p>
          <p>
            <strong>Telefone:</strong> (XX) XXXXX-XXXX
          </p>
          <p>
            <strong>E-mail:</strong> email@email.com
          </p>
          <p>
            <strong>Horário de Funcionamento:</strong> Segunda a Sexta: 08h às 18h
          </p>
        </Info>
        <MapFormContainer>
          <StyledForm>
            <ContactForm title="Duvidas?" />
          </StyledForm>
          <StyledMap>
            <Map
              title="Venha nos visitar"
              containerStyles={{ flexDirection: 'column' }}
              iframeStyles={{}} />
          </StyledMap>
        </MapFormContainer>

      </Content>
    </Container>
  );
};

export default Contact;
