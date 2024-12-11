import styled from "styled-components";
import { useState } from "react";
import { FaBalanceScale, FaGavel, FaFileContract, FaBuilding, FaLeaf, FaLaptopCode } from "react-icons/fa";

const Container = styled.section`
  padding: 2% 7%;
  margin-top: 120px;
  display: flex;


  align-items: baseline;
  gap: 80px;

  h2 {
    font-size: 2rem;
  }

  div {

/* Ajusta para 3 cards por linha */
  gap: 30px; /* Aumenta o espaçamento entre os cards */
  width: 50vw;
  margin-top: 20px;

}

@media(max-width: 1023px) {
  flex-direction: column;
  align-items: center;
  div {
    width: 90vw
  }
}

`;

const Card = styled.div`
  background: #1B1B1B;
  color: #FFFFFF;
  padding: ${(props) => (props.expanded ? "30px" : "20px")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: ${(props) => (props.expanded ? "none" : "translateY(-10px)")};
    box-shadow: ${(props) =>
    props.expanded
      ? "0px 8px 16px rgba(0, 0, 0, 0.4)"
      : "0px 8px 16px rgba(0, 0, 0, 0.4)"};
  }

  svg {
    font-size: 2.5rem;
    color: #D9D2A6;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #D9D2A6;
  }

  .extra-text {
    margin-top: 10px;
    font-size: 0.85rem;
    color: #D9D2A6;
    opacity: ${(props) => (props.expanded ? 1 : 0)};
    max-height: ${(props) => (props.expanded ? "500px" : "0")};
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;

const Specialties = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const specialties = [
    {
      icon: <FaBalanceScale />,
      title: "Direito Civil",
      description: "Atuamos em ações relacionadas a contratos, obrigações e direito de família.",
      extraText:
        "O Direito Civil é a base das relações jurídicas na sociedade, abrangendo contratos, família, sucessões e obrigações. Prestamos consultoria completa para auxiliar nossos clientes a navegar por disputas contratuais, divórcios, heranças e outros processos cíveis com eficiência.",
    },
    {
      icon: <FaGavel />,
      title: "Direito Penal",
      description: "Defendemos os interesses de nossos clientes em processos criminais.",
      extraText:
        "Nossa equipe é especializada em defesa e acusação em casos criminais. Atuamos em investigações, processos judiciais e recursos, buscando sempre proteger os direitos fundamentais de nossos clientes e garantir justiça no sistema penal.",
    },
    {
      icon: <FaFileContract />,
      title: "Direito Contratual",
      description: "Elaboração, revisão e análise de contratos empresariais e pessoais.",
      extraText:
        "O Direito Contratual é essencial para negócios e relações jurídicas seguras. Realizamos a elaboração e revisão de contratos empresariais, pessoais e internacionais, garantindo clareza, conformidade e proteção aos interesses de nossos clientes.",
    },
    {
      icon: <FaBuilding />,
      title: "Direito Imobiliário",
      description: "Consultoria em transações imobiliárias e regularização de imóveis.",
      extraText:
        "Auxiliamos na compra, venda e regularização de imóveis, além de representar clientes em disputas relacionadas a propriedades. Nossa expertise garante segurança jurídica em todas as etapas de transações imobiliárias.",
    },
    {
      icon: <FaLeaf />,
      title: "Direito Ambiental",
      description: "Defesa em questões de legislação ambiental e sustentabilidade.",
      extraText:
        "O Direito Ambiental é fundamental para empresas e indivíduos que buscam conformidade com a legislação ambiental. Atuamos em licenciamento, processos administrativos e defesa em ações de responsabilidade ambiental.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Direito Digital",
      description: "Atuação em privacidade, proteção de dados e crimes cibernéticos.",
      extraText:
        "No contexto digital, oferecemos suporte em proteção de dados, privacidade e defesa em crimes cibernéticos. Trabalhamos para garantir conformidade com a LGPD e segurança jurídica em operações online.",
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Container>
      <h2>Especialidades</h2>
      <div>
        {specialties.map((item, index) => (
          <Card
            key={index}
            expanded={expandedCard === index}
            onClick={() => toggleCard(index)}
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="extra-text">{item.extraText}</div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Specialties;
