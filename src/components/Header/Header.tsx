import { Container } from './Header.styles';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container className={scrolled ? 'scrolled' : ''}>
      <Logo />
      <Menu />
    </Container>
  );
};

export default Header;
