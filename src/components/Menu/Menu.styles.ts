import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0;

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    :hover {
      color: ${(props) => props.theme.color.secundary};
      text-decoration: underline;
    }
  }

  a {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
  }

  @media (max-width: 1023px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;

    ul {
      flex-direction: column;
      position: absolute;
      top: 4rem;
      left: 0px;
      padding: 1% 7%;
      width: 100%;
      background-color: #1b1b1b;
      opacity: 99%;
    }

    li {
      padding: 0.5rem;
    }
  }
`;

export const ContentMobile = styled.nav`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
  }
`;
