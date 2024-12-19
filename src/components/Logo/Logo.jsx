import { StyledImg } from './Logo.styles';
import logo from '../../assets/logo/logo-mobile.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <picture>
        <source srcSet={logo} media="(max-width: 768px)" />
        <StyledImg src={logo} alt="Logo" />
        {/* <StyledImg1 src={logo} alt="Logo" /> */}
      </picture>
    </Link>
  );
};

export default Logo;
