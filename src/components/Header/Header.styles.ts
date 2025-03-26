import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  /* height: 15%; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 1% 7%;

  transition: background-color 0.3s ease;
  @media (max-width: 1023px) {
  }
  &.scrolled {
    background-color: #1b1b1b;
  }

  @media (max-width: 1023px) {
    background-color: #1b1b1b;
  }
`;
