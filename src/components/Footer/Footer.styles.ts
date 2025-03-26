import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #1b1b1b;
  color: #fff;
  text-align: center;
  padding: 1% 7%;
  font-size: 0.9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #0077b6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
