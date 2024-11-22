import styled, { keyframes } from "styled-components"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const slideIn = keyframes`
  from {
    transform: translateX(-100%); /* Começa fora da tela à esquerda */
    opacity: 0; /* Invisível no início */
  }
  to {
    transform: translateX(0); /* Posição final */
    opacity: 1; /* Totalmente visível */
  }
`;

const Container = styled.div`
    height: 100vh;
    margin-top: 50px;
    padding: 2% 7%;

    @media(max-width: 1023px) {
      
    }
    
`

const GridContainer = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10%;
  
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;

  }
`

const GridItem1 = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%; /* Para ocupar o espaço total da célula */
  width: 100%;
  gap: 30px;

  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.font.bigger};
  }

  p {
    text-align: justify;
    font-size: ${(props) => props.theme.font.default};
    color: ${(props) => props.theme.color.secundary};
  }


    
  ul {
      background-color: #1b1b1b;
      height: 50px;
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
         
  }
  @media(max-width: 1023px) {
    h2 {
    font-size: 1.5rem;
    }
  }

`

const GridItem2 = styled.div`
  grid-column: 2;

  img {
    /* width: 600px; */
    margin-left: 50px;
    animation: ${slideIn} 1s ease-out;
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;  */
    &:hover{
      transform: scale(1.02); 
    }
  }

  @media(max-width: 1023px) {
    grid-column: 1;
    text-align: center;
    img {
      margin-left: 0;
      width: 50%;
    }
  }

`

const HeroSection = () => {
  return (
    <Container>
      <GridContainer>
        <GridItem1>
          <h2>Assessoria e Consultoria Jurídica</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          </p>

          <ul>
            <li><MdOutlineEmail size={32} /></li>
            <li><FaInstagram size={32} /></li>
            <li><FaLinkedinIn size={32} /></li>
          </ul>

        </GridItem1>
        <GridItem2>
          <img src="src/assets/images/hero-banner.png" />
        </GridItem2>
      </GridContainer>
    </Container>
  )
}

export default HeroSection