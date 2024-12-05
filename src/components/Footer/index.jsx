import styled from 'styled-components';
import Logo from '../Logo';

const Container = styled.footer`
  background-color: #1b1b1b;
  color: #fff;
  text-align: center;
  padding: 1% 7%;
  font-size: 0.9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #0077b6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <p>
          © {new Date().getFullYear()} Resende e Fernandes sociedade de
          advogados. Todos os direitos reservados.
        </p>
        <p>
          Feito com 🖤 por{' '}
          <a
            href="https://www.linkedin.com/in/matheus-prado-de-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matheus Prado Dev
          </a>
        </p>
      </div>
      <div>
        <Logo />
      </div>
    </Container>
  );
};

export default Footer;
