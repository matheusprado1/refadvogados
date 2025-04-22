import { Container } from './Footer.styles';

const Footer = () => {
  return (
    <Container>
      <footer>
        <p>
          © {new Date().getFullYear()} Resende e Fernandes sociedade de
          advogados OAB/MG n. 15736.
          Todos os direitos reservados.
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
