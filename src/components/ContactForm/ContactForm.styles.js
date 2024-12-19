import styled from 'styled-components';

export const Container = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 15px;
  }

  label {
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: ${(props) => props.theme.color.secundary};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.4;
  }

  @media(max-width: 1023px) {
    padding: 1% 7%;
  }
`;
