import {
  Container,
  GridContainer,
  GridItem1,
  SocialLinks,
  WhatsAppButton,
  GridItem2,
} from './HeroSection.styles';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import completaVertical from '../../assets/logo/vertical.png';

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
            href="https://wa.me/+5534988669798?text=Olá! Gostaria de saber mais sobre os serviços do escritório."
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
