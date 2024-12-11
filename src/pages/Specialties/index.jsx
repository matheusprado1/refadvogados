import styled from "styled-components";

const Container = styled.section`
  padding: 2% 7%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Specialties = () => {
  return (
    <Container>
      <h2>Especialidades</h2>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>

    </Container>
  )
}

export default Specialties;