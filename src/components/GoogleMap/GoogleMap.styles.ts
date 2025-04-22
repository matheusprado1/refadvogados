import styled from 'styled-components';

export const Container = styled.div`
  padding: 1% 7%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;


  h2 {
    /* font-size: 1.5rem; */
    width: auto;
    /* margin-bottom: 30px; */
  }

  div {

    height: 200px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    div {
      width: 100%;
      height: 300px;
      max-height: 100%;
      /* margin-bottom: 30px; */
    }
  }
`;
