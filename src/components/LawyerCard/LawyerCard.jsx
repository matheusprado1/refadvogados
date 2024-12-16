import { Container, CarouselStyled } from './LawyerCard.styles';

const LawyerCard = ({ name, description, images }) => (
  <Container>
    <h3>{name}</h3>
    <p>{description}</p>
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
  </Container>
);

export default LawyerCard;
