import styled from 'styled-components';
import vitorPerfil from '../../assets/pictures/vitor-sentado.jpg';
import pedroPerfil from '../../assets/pictures/pedro-sentado.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Container = styled.section`
  padding: 2% 7%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'title content'
    'images images';
  gap: 20px;
  line-height: 1.8;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h3`
  grid-area: title;
  font-size: ${(props) => props.theme.font.bigger};
  text-align: left;
  position: relative;

  &::after {
    content: '';
    display: block;
    margin: 0px 10px 0; 
    width: 20%;
    height: 2px; 
    background-color: ${(props) => props.theme.color.secundary || '#000'};

    @media(max-width: 1023px) {
      width: 90%;
    }
  }
`;


const ContentContainer = styled.div`
  grid-area: content;
  width: 100%;
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.p`
  margin-bottom: 30px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  padding: 2%;
  background-color: ${(props) => props.theme.color.secundary};
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.color.primary};;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.8;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const PerfilContainer = styled.div`
  grid-area: images;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;

  img {
    width: 65%;

    @media (max-width: 1023px) {
      width: 60%;
    }
  }

  div {
    margin-top: 20px;
    width: 30%;

    @media (max-width: 1023px) {
      width: 80%;
    }
  }

  h3 {
    font-size: 2rem;
  }

  strong {
    color: ${(props) => props.theme.color.secundary};
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  a {
    cursor: pointer;
  }
`;

const Section = () => {
  return (
    <Container>
      <Title>Quem somos ?</Title>
      <ContentContainer>
        <Content>
          Resende & Fernandes Sociedade de Advogados, registrado na OAB/MG sob o n. 15736, é um escritório de advocacia com sede na cidade de Araguari – Minas Gerais. Nossa equipe é composta por profissionais altamente qualificados, preparados para oferecer soluções jurídicas personalizadas e estratégicas, sempre focando nos melhores resultados para nossos clientes e parceiros. Nosso foco está em Direito Cível, Direito Trabalhista e Direito Previdenciário, com especial atenção a pessoas físicas, pequenas empresas e profissionais liberais. A experiência acumulada em negociações, litígios e consultoria jurídica nos permite atuar com eficiência, proporcionando segurança e clareza em cada decisão.
        </Content>
        <Link to="/about">
          <StyledButton>Saiba mais</StyledButton>
        </Link>
      </ContentContainer>
      <PerfilContainer>
        <div>
          <img src={pedroPerfil} alt={'perfil'} loading='lazy' />
          <h3>
            Pedro <strong>Resende</strong>
          </h3>
          <p>
            Advogado | OAB/MG 153.323 Especialista em Direito Empresarial,
            Contratos e Soluções Jurídicas para Pequenas e Médias Empresas
          </p>
          <SocialLinks>
            <a>
              <MdOutlineEmail size={24} />
            </a>
            <a>
              <FaInstagram size={24} />
            </a>
            <a>
              <FaLinkedinIn size={24} />
            </a>
            <a>
              <IoLogoWhatsapp size={24} />
            </a>
          </SocialLinks>
        </div>
        <div>
          <img src={vitorPerfil} alt={'perfil'} loading='lazy' />
          <h3>
            Vitor <strong>Fernandes</strong>
          </h3>
          <p>
            Advogado | OAB/MG 198.803 Especialista em Direito Empresarial,
            Contratos e Soluções Jurídicas para Pequenas e Médias Empresas
          </p>
          <SocialLinks>
            <a>
              <MdOutlineEmail size={24} />
            </a>
            <a>
              <FaInstagram size={24} />
            </a>
            <a>
              <FaLinkedinIn size={24} />
            </a>
            <a>
              <IoLogoWhatsapp size={24} />
            </a>
          </SocialLinks>
        </div>
      </PerfilContainer>
    </Container>
  );
};

export default Section;
