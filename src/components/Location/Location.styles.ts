import styled from "styled-components";

export const LocationContainer = styled.section`
  padding: 1% 7%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  
  
  div {
    width: 100%;
    /* padding: 30px; */
    /* height: 500px; */
  }

  h2 {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    /* gap: 30px; */
  }
`;

export const InfoContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 30px;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;

  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;

  }
  
  @media (max-width: 1023px) {
    width: 100%;
    padding: 0;
    margin-top: 30px;
    max-height: 100%;
  }

`
