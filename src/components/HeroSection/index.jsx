import styled, { keyframes } from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import heroBanner from '../../assets/banner/justice.png';
import completaVertical from '../../assets/logo/vertical.png'
// import heroSection from '../../assets/banner/hero-section.jpg';
import { IoLogoWhatsapp } from 'react-icons/io5';

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
  /* margin-top: 50px; */
  padding: 2% 7%;
  /* background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); */
  color: #fff;


  @media (max-width: 1023px) {
    padding: 20% 5%;
    /* margin-top: 0; */
    /* height: auto; */
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100%;
  gap: 15%;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
    /* gap: 20px; */
    /* margin-top: 120px; */
    gap: 10%;
  }
`;

const GridItem1 = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20%;

  @media (max-width: 1023px) {
    margin-top: 0;

  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    color: ${(props) => props.theme.color.primary || '#fff'};
    text-align: left;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${(props) => props.theme.color.secundary || '#d4d4d4'};
    text-align: left;
  }

  /* ul {
      background-color: #1b1b1b;
      height: 50px;
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
         
  } */
  @media (max-width: 1023px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const GridItem2 = styled.div`
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

const SocialLinks = styled.ul`
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
        background-color: ${(props) => props.theme.color.secundary || '#fff'};
      }
    }
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.color.secundary || '#D9D2A6'};
  color: ${(props) => props.theme.color.primary || '#1B1B1B'};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  svg {
    margin-right: 10px;
  }
`;
const HeroSection = () => {
  return (
    <Container>
      <GridContainer>
        <GridItem1>
          <h2>Assessoria e Consultoria Jurídica</h2>
          <p>
            Oferecemos soluções jurídicas personalizadas e estratégicas para
            empresas e indivíduos. Com anos de experiência, nossa equipe está
            preparada para atuar em diversas áreas do Direito, garantindo
            segurança jurídica, agilidade e excelência no atendimento.
          </p>

          <SocialLinks>
            <li>
              <a
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
            </li>
          </SocialLinks>
          <WhatsAppButton
            href="https://wa.me/+5534988996340?text=Olá! Gostaria de saber mais sobre os serviços do escritório."
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp size={24} />
            Fale Conosco no WhatsApp
          </WhatsAppButton>

        </GridItem1>


        <GridItem2>
          <img src={completaVertical} alt="Hero Banner" />
        </GridItem2>
      </GridContainer>
    </Container>
  );
};

export default HeroSection;
