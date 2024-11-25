import styled from "styled-components"

const Container = styled.section`
  padding: 2% 7%;
  display: flex;
  flex-wrap: wrap; /* Para responsividade */
  gap: 20px;
  justify-content: space-between; /* Centraliza os cards */

  @media(max-width: 1023px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardBox = styled.div`
  background: ${(props) => props.theme.color.secundary || "#fff"};
  color: ${(props) => props.theme.color.secundary || "#333"};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para destaque */
  border-radius: 10px;
  padding: 20px;
  width: 300px; /* Largura fixa */
  text-align: center; /* Centraliza o conteúdo */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Efeito de elevação */
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2); /* Sombra mais forte */
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.primary};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: ${(props) => props.theme.color.background || "#555"};
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 20px; /* Espaçamento abaixo do título */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%; /* Garante que ocupe a largura total da seção */
  margin-top: 20px; /* Espaçamento acima do botão */
`;


const Button = styled.button`
  background: ${(props) => props.theme.color.secundary}; /* Cor de fundo */
  color: #000; /* Cor do texto */
  padding: 2%;
  max-width: 300px;
  height: 50px;
   border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
   /* Cor de hover */
    transform: scale(1.05); /* Leve aumento */
    color: ${(props) => props.theme.color.primary}
  }

  &:active {
    transform: scale(0.95); /* Leve redução ao clicar */
  }

  @media (max-width: 1023px) {
    width: 100%; /* Para dispositivos menores */
    font-size: 1.2rem;
  }
`;



const Card = () => {
  const specialties = [
    {
      title: "Direito Empresarial",
      description: "Assessoria para empresas em questões contratuais, societárias e compliance.",
    },
    {
      title: "Direito Trabalhista",
      description: "Representação em disputas trabalhistas e consultoria preventiva.",
    },
    {
      title: "Direito Civil",
      description: "Resolução de conflitos envolvendo contratos, indenizações e direitos do consumidor.",
    },
  ];

  return (
    <Container>
      <Title>Especialidades</Title>
      {specialties.map((item, index) => (
        <CardBox key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </CardBox>
      ))}
      <ButtonWrapper>
        <Button onClick={() => window.location.href = "https://wa.me/5511999999999"}>
          Falar com Especialistas
        </Button>
      </ButtonWrapper>
    </Container>
  );
};


export default Card