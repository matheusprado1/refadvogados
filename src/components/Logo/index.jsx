import styled from 'styled-components';
import logoDesktop from '../../assets/logo-desktop.png'
import logoMobile from '../../assets/logo-mobile.png';

const StyledImg = styled.img`
  max-height: 100px;
  /* padding-top: 10px; */
`;

const Logo = () => {
  return (
    <picture>
      <source srcSet={logoMobile} media="(max-width: 768px)" />
      <StyledImg src={logoDesktop} alt="Logo" />
    </picture>
  );
};

export default Logo;
