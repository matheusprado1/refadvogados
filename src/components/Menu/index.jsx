import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0;

  ul {
    display: flex;
    list-style: none;
    align-items: flex-start;
    padding: 10px;
    gap: 2rem;
/* 
    flex-direction: ${(props) => (props.isOpen ? 'column' : 'row')}; */
  }

  li {
    list-style-type: none;
  :hover {
    color: ${(props) => props.theme.color.secundary};
    text-decoration: underline;
    }
  }

  a {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
  }


  @media (max-width: 1023px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;

    ul {
      flex-direction: column;
      position: absolute;
      top: 7rem;
      left: 0px;
      padding: 1% 7%;
      width: 100%;
      background-color: #1b1b1b;
      opacity: 99%;
    }

    li {
      padding: 0.5rem;
    }
  }
`;

const ContentMobile = styled.nav`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
  }
`;

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
            <Link to="#">Especialidades</Link>
          </li>
          <li>
            <Link to="#">Fale conosco</Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Menu;
