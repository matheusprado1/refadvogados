import styled from 'styled-components';

export const Container = styled.section`
  padding: 2% 7%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'title content'
    'images images';
  gap: 20px;
  line-height: 1.8;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h3`
  grid-area: title;
  font-size: ${(props) => props.theme.font.bigger};
  text-align: left;
  position: relative;

  &::after {
    content: '';
    display: block;
    margin: 0px 10px 0;
    width: 20%;
    height: 2px;
    background-color: ${(props) => props.theme.color.secundary || '#000'};

    @media (max-width: 1023px) {
      width: 90%;
    }
  }
`;

export const ContentContainer = styled.div`
  grid-area: content;
  width: 100%;
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.p`
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  padding: 2%;
  background-color: ${(props) => props.theme.color.secundary};
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.color.primary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.8;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

export const PerfilContainer = styled.div`
  grid-area: images;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;

  img {
    width: 65%;

    @media (max-width: 1023px) {
      width: 60%;
    }
  }

  div {
    margin-top: 20px;
    width: 30%;

    @media (max-width: 1023px) {
      width: 80%;
    }
  }

  h3 {
    font-size: 2rem;
  }

  strong {
    color: ${(props) => props.theme.color.secundary};
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  a {
    cursor: pointer;
  }
`;
