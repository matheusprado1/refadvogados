import { Container, ContentMobile } from './Menu.styles';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1023 && !menuIsOpen) {
      setMenuIsOpen(true);
    }
    if (window.innerWidth < 1023 && menuIsOpen) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuIsOpen]);

  return (
    <Container>
      <ContentMobile onClick={toggleMenu}>
        {menuIsOpen ? (
          <IoCloseSharp color="white" size="28" />
        ) : (
          <TiThMenu color="white" size="28" />
        )}
      </ContentMobile>
      {menuIsOpen || window.innerWidth > 1023 ? (
        <ul>
          <li>
            <Link to="/about">Nosso escritório</Link>
          </li>
          <li>
            <Link to="/specialties">Especialidades</Link>
          </li>
          <li>
            <Link to="/contact">Fale conosco</Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Menu;
