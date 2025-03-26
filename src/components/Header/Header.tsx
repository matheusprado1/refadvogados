import { Container } from './Header.styles';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import useScrolled from '../../utils/ScrollToTop/Scrolled';

const Header = () => {
  const scrolled = useScrolled(50);

  return (
    <Container className={scrolled ? 'scrolled' : ''}>
      <Logo />
      <Menu />
    </Container>
  );
};

export default Header;
