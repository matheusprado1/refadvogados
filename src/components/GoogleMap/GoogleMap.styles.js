import styled from 'styled-components';

export const Container = styled.div`
  padding: 1% 7%;
  display: flex;

  h2 {
    font-size: 2rem;
    width: auto;
  }

  div {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    div {
      width: 100%;
    }
  }
`;
