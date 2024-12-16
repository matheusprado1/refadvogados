import styled from 'styled-components';

export const Container = styled.section`
  padding: 2% 7%;
  margin-top: 120px;
  display: flex;

  align-items: baseline;
  gap: 80px;

  h2 {
    font-size: 2rem;
  }

  div {
    /* Ajusta para 3 cards por linha */
    gap: 30px; /* Aumenta o espaçamento entre os cards */
    width: 50vw;
    margin-top: 20px;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    div {
      width: 90vw;
    }
  }
`;

export const Card = styled.div`
  background: #1b1b1b;
  color: #ffffff;
  padding: ${(props) => (props.expanded ? '30px' : '20px')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: ${(props) => (props.expanded ? 'none' : 'translateY(-10px)')};
    box-shadow: ${(props) =>
      props.expanded
        ? '0px 8px 16px rgba(0, 0, 0, 0.4)'
        : '0px 8px 16px rgba(0, 0, 0, 0.4)'};
  }

  svg {
    font-size: 2.5rem;
    color: #d9d2a6;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #d9d2a6;
  }

  .extra-text {
    margin-top: 10px;
    font-size: 0.85rem;
    color: #d9d2a6;
    opacity: ${(props) => (props.expanded ? 1 : 0)};
    max-height: ${(props) => (props.expanded ? '500px' : '0')};
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;
