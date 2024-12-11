import styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../Menu';
import { useState, useEffect } from 'react';


const StyledHeader = styled.header`
  width: 100%;
  /* height: 15%; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 1% 7%;

  transition: background-color 0.3s ease;
  @media(max-width: 1023px) {

  }
  &.scrolled {
    background-color: #1B1B1B;
  }

  @media(max-width: 1023px){
    background-color: #1B1B1B;
  }
`;

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
    <StyledHeader className={scrolled ? 'scrolled' : ''}>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

export default Header;
