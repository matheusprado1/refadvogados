import styled from "styled-components";

// Container geral da seção
const ReviewsSection = styled.section`
  padding: 4% 7%;

  color: #D9D2A6;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #000000;
  }
`;

// Estilo do contêiner de avaliações
const ReviewsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Cada card de avaliação
const ReviewCard = styled.div`
  background-color: #1B1B1B;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #D9D2A6;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .rating {
    color: #FFD700; /* Cor dourada para estrelas */
    font-size: 1.2rem;
  }
`;

const Reviews = () => {
  // Dados de exemplo (você pode substituir por dados dinâmicos ou de uma API)
  const reviews = [
    {
      name: "João Silva",
      text: "Ótimo serviço, recomendo a todos! Atendimento excelente.",
      rating: 5,
    },
    {
      name: "Maria Oliveira",
      text: "Fui muito bem atendida e minhas dúvidas foram esclarecidas com paciência.",
      rating: 5,
    },
    {
      name: "Carlos Pereira",
      text: "Serviço eficiente e de alta qualidade. Parabéns à equipe!",
      rating: 5,
    },
  ];

  return (
    <ReviewsSection>
      <h2>O que nossos clientes dizem</h2>
      <ReviewsContainer>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <div className="rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default Reviews;
