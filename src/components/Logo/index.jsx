import styled from 'styled-components';
import logoDesktop from '../../assets/logo/logo-desktop.png'
import logoMobile from '../../assets/logo/logo-mobile.png'
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
  /* max-height: 10p; */
  /* padding-top: 10px; */
  max-height: 100px;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link to="/">
      <picture>
        <source srcSet={logoMobile} media="(max-width: 768px)" />
        <StyledImg src={logoDesktop} alt="Logo" />
      </picture>
    </Link>
  );
};

export default Logo;
