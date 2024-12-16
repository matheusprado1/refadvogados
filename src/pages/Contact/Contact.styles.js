import styled from 'styled-components';

export const Container = styled.section`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Info = styled.div`
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
    color: #d9d2a6; /* Destaque para combinar com o design */
  }
`;

export const MapFormContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centraliza no eixo vertical para telas menores */
  }

  & > div,
  iframe {
    flex: 1; /* Faz o formulário e o mapa ocuparem o mesmo espaço */
    width: 100%;
  }
`;

export const StyledForm = styled.div`
  background-color: #1b1b1b; /* Fundo escuro para combinar com o tema */
  padding: 20px;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona leve sombra */
  flex: 1; /* Para que o tamanho se ajuste proporcionalmente */
`;

export const StyledMap = styled.div`
  background-color: #1b1b1b;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
`;
