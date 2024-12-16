import {
  Container,
  Title,
  ContentContainer,
  Content,
  StyledButton,
  PerfilContainer,
  SocialLinks,
} from './Section.styles';
import vitorPerfil from '../../assets/pictures/vitor-sentado.jpg';
import pedroPerfil from '../../assets/pictures/pedro-sentado.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <Container>
      <Title>Quem somos ?</Title>
      <ContentContainer>
        <Content>
          Resende & Fernandes Sociedade de Advogados, registrado na OAB/MG sob o
          n. 15736, é um escritório de advocacia com sede na cidade de Araguari
          – Minas Gerais. Nossa equipe é composta por profissionais altamente
          qualificados, preparados para oferecer soluções jurídicas
          personalizadas e estratégicas, sempre focando nos melhores resultados
          para nossos clientes e parceiros. Nosso foco está em Direito Cível,
          Direito Trabalhista e Direito Previdenciário, com especial atenção a
          pessoas físicas, pequenas empresas e profissionais liberais. A
          experiência acumulada em negociações, litígios e consultoria jurídica
          nos permite atuar com eficiência, proporcionando segurança e clareza
          em cada decisão.
        </Content>
        <Link to="/about">
          <StyledButton>Saiba mais</StyledButton>
        </Link>
      </ContentContainer>
      <PerfilContainer>
        <div>
          <img src={pedroPerfil} alt={'perfil'} loading="lazy" />
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
          <img src={vitorPerfil} alt={'perfil'} loading="lazy" />
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
