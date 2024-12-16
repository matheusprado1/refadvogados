import styled from "styled-components";

export const ButtonContainer = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366; /* Verde do WhatsApp */
  color: #FFFFFF;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }

  svg {
    font-size: 2rem;
  }
`;