import styled from 'styled-components';
import logoDesktop from '../../assets/logo/logo-desktop.svg';
import logoMobile from '../../assets/logo/logo-mobile.png';
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
  /* max-height: 10p; */
  /* padding-top: 10px; */
  max-height: 95px;
  /* width: 600px; */
  /* width: 600px; */

  cursor: pointer;

  @media(max-width: 768px) {
    width: auto;
  }
`;

// const StyledImg1 = styled.img`
//   /* max-height: 10p; */
//   /* padding-top: 10px; */
//   max-height: 75px;
//   cursor: pointer;
// `;

const Logo = () => {
  return (
    <Link to="/">
      <picture>
        <source srcSet={logoMobile} media="(max-width: 768px)" />
        <StyledImg src={logoDesktop} alt="Logo" />
        {/* <StyledImg1 src={logo} alt="Logo" /> */}
      </picture>
    </Link>
  );
};

export default Logo;
