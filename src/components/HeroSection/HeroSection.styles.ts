import styled, { keyframes } from 'styled-components';
import texture from '../../assets/banner/texture1.jpg'

export const slideIn = keyframes`
  from {
    transform: translateX(-100%); /* Começa fora da tela à esquerda */
    opacity: 0; /* Invisível no início */
  }
  to {
    transform: translateX(0); /* Posição final */
    opacity: 1; /* Totalmente visível */
  }
`;

export const Container = styled.div`
  height: 100vh;
  /* margin-top: 50px; */
  padding: 2% 7%;
  /* background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); */
  color: #fff;
  background: url(${texture}) no-repeat center center;
  background-size: cover;
  position: relative; /* Necessário para o uso do ::before */

  /* Overlay escuro */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Cor preta com opacidade de 60% */
    z-index: 1; /* Coloca o overlay atrás do conteúdo */
  }

  /* Para o conteúdo */
  > * {
    position: relative;
    z-index: 2; /* Garante que os elementos do conteúdo fiquem acima do overlay */
  }

  @media (max-width: 1023px) {
    padding: 0 5%;
    /* margin-bottom: 30px; */
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100%;
  gap: 5%;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
    /* gap: 20px; */
    /* margin-top: 120px; */
    height: 90vh;
    /* gap: 30px; */
  }

  /* @media (max-width: 420px) {
    gap: 5%;
  } */

  /* @media (max-width: 319px) {
   gap: 5%;
  } */
`;

export const GridItem1 = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20%;

  @media (max-width: 1023px) {
    margin-top: 0;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    color: ${(props) => props.theme.color.primary};
    text-align: left;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${(props) => props.theme.color.secundary};
    text-align: left;
  }

  @media (max-width: 1023px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const GridItem2 = styled.div`
  img {
    width: 100%;

    /* border-radius: 15px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5); */
    animation: ${slideIn} 1.2s ease-out;

    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }

  @media (max-width: 1023px) {
    /* grid-column: 1;
    text-align: center;
    img {
      margin-top: 30px;
      margin-left: 0;
      width: 70%;
    } */
    /* display: none; */
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  padding: 0;
  list-style: none;

  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background-color: #ffffff33;
      color: #fff;
      border-radius: 50%;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${(props) => props.theme.color.secundary};
      }
    }
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.color.secundary};
  color: ${(props) => props.theme.color.primary};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  svg {
    margin-right: 10px;
  }

  @media(max-width: 1023px) {
    display: none;
  }
`;
