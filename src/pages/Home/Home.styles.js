import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 50px 0;
  background-color: ${(props) => props.bgColor || '#FFFFFF'};
  border-top: 5px solid ${(props) => props.borderColor || '#D9D2A6'};
  color: ${(props) =>
    props.bgColor === '#1B1B1B' || props.bgColor === '#000000'
      ? '#FFFFFF'
      : '#000000'};
`;
