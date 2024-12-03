import styled from "styled-components"
import vitorPerfil from "../../assets/pictures/vitor-sentado.jpg"
import pedroPerfil from "../../assets/pictures/pedro-sentado.jpg"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io5"
import { Link } from "react-router-dom"

const Container = styled.section`
  padding: 2% 7%;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas */
  grid-template-rows: auto auto; /* Título/conteúdo + imagens */
  grid-template-areas:
    "title content"
    "images images"; /* Imagens ocupam toda a largura */
  gap: 20px; /* Espaçamento entre os elementos */
  line-height: 1.8;

  @media(max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h3`
  grid-area: title;
  font-size: ${(props) => props.theme.font.bigger};

  
`;

const ContentContainer = styled.div`
  grid-area: content;
  width: 100%;
  @media(max-width: 1023px) {
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
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "50px"};
  margin-top: ${(props) => props.marginTop || "20px"};
  padding: ${(props) => props.padding || "2%"};
  background-color: ${(props) => props.theme.color.secundary || "#007BFF"};
  color: #000;
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "white"};
    transform: scale(1.05); /* Pequeno efeito de aumento */
  }

  &:active {
    transform: scale(0.95); /* Diminui ligeiramente ao clicar */
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
 /* Centraliza verticalmente */
  gap: 20px; /* Espaçamento entre as imagens */
  margin-top: 30px;

  img {
    width: 65%;

    @media(max-width: 1023px) {
      width: 60%;
    }
  }

 div {
    margin-top: 20px;
    width: 30%;

    @media(max-width: 1023px) {
      width: 80%;
    }
  }

  h3 {
    font-size: 2rem;
  }

  strong {
    color: ${(props) => props.theme.color.secundary};
  }

  @media(max-width: 1023px) {
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

`

const Section = () => {
  return (
    <Container>
      <Title>Quem somos ?</Title>
      <ContentContainer>
        <Content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Content>
        <Link to="/about">
          <StyledButton>Saiba mais</StyledButton>

        </Link>
      </ContentContainer>
      <PerfilContainer>
        <div>
          <img src={pedroPerfil} alt={"perfil"} />
          <h3>Pedro <strong>Resende</strong></h3>
          <p>Advogado | OAB/MG 153.323
            Especialista em Direito Empresarial,
            Contratos e Soluções Jurídicas para Pequenas e Médias Empresas</p>
          <SocialLinks>
            <a><MdOutlineEmail size={24} /></a>
            <a><FaInstagram size={24} /></a>
            <a><FaLinkedinIn size={24} /></a>
            <a><IoLogoWhatsapp size={24} /></a>
          </SocialLinks>
        </div>
        <div>
          <img src={vitorPerfil} alt={"perfil"} />
          <h3>Vitor <strong>Fernandes</strong></h3>
          <p>Advogado | OAB/MG 198.803
            Especialista em Direito Empresarial,
            Contratos e Soluções Jurídicas para Pequenas e Médias Empresas</p>
          <SocialLinks>
            <a><MdOutlineEmail size={24} /></a>
            <a><FaInstagram size={24} /></a>
            <a><FaLinkedinIn size={24} /></a>
            <a><IoLogoWhatsapp size={24} /></a>
          </SocialLinks>
        </div>
      </PerfilContainer>
    </Container>
  );
};

export default Section;
