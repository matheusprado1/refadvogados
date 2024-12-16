import styled from 'styled-components';

export const Container = styled.section`
  padding: 1% 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h2 {
    font-size: 2rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(400px, 1fr)
    ); /* Cards mais largos */
    gap: 30px; /* Maior espaçamento entre os cards */
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 1023px) {
    div {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;

export const Card = styled.div`
  background: #1b1b1b;
  color: #ffffff;
  padding: 30px; /* Mais espaçamento interno */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Sombra mais forte */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  }

  svg {
    font-size: 3rem; /* Ícones maiores */
    color: #d9d2a6;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.4rem;
    color: #ffffff;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem; /* Texto mais legível */
    color: #d9d2a6;
    line-height: 1.6;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; /* Garante que ocupe a largura total da seção */
  margin-top: 20px; /* Espaçamento acima do botão */
`;

export const Button = styled.button`
  background: ${(props) => props.theme.color.secundary}; /* Cor de fundo */
  color: #000; /* Cor do texto */
  padding: 2%;
  max-width: 300px;
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Leve aumento */
    color: ${(props) => props.theme.color.primary};
  }

  &:active {
    transform: scale(0.95); /* Leve redução ao clicar */
  }

  @media (max-width: 1023px) {
    width: 100%; /* Para dispositivos menores */
    font-size: 1.2rem;
  }
`;
