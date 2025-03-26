import React from 'react';
import { Container } from './Footer.styles';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <Container>
      <footer>
        <p>
          © {new Date().getFullYear()} Resende e Fernandes sociedade de
          advogados. Todos os direitos reservados.
        </p>
        {/* <p>
          Feito com 🖤 por{' '}
          <a
            href="https://www.linkedin.com/in/matheus-prado-de-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matheus Prado Dev
          </a>
        </p> */}
      </footer>
      <div>
        <Logo />
      </div>
    </Container>
  );
};

export default Footer;
