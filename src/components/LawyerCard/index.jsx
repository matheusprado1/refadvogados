import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardContainer = styled.div`
  width: 100%;
  max-width: 35%;
  margin: 20px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.color.secundary};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media(max-width: 1121px) {
    max-width: 90%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.primary}
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #000;
  margin: 10px 0;
  text-align: left;

`;

const CarouselStyled = styled(Carousel)`
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

// Componente Card
const LawyerCard = ({ name, description, images }) => (
  <CardContainer>
    <CardTitle>{name}</CardTitle>
    <CardDescription>{description}</CardDescription>
    <CarouselStyled
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={10000}
    >
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`${name} foto ${index + 1}`} />
        </div>
      ))}
    </CarouselStyled>
  </CardContainer>
);

export default LawyerCard;