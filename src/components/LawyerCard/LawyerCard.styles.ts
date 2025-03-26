import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Container = styled.div`
  width: 100%;
  max-width: 35%;
  margin: 20px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.color.secundary};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.primary};
  }

  p {
    font-size: 1rem;
    color: #000;
    margin: 10px 0;
    text-align: left;
  }

  @media (max-width: 1121px) {
    max-width: 90%;
  }
`;

export const CarouselStyled = styled(Carousel)`
  .control-arrow,
  .carousel .control-prev.control-arrow,
  .carousel .control-next.control-arrow {
    background: none;
  }

  .carousel .slide img {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
