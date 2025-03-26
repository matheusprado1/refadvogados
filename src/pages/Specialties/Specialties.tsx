import { Container, Card } from './Specialties.styles';
import { useState } from 'react';
import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaBuilding,
  FaLeaf,
  FaLaptopCode,
} from 'react-icons/fa';

const Specialties = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const specialties = [
    {
      icon: <FaBalanceScale />,
      title: 'Direito Civil',
      description:
        'Atuamos em ações relacionadas a contratos, obrigações e direito de família.',
      extraText:
        'O Direito Civil é a base das relações jurídicas na sociedade, abrangendo contratos, família, sucessões e obrigações. Prestamos consultoria completa para auxiliar nossos clientes a navegar por disputas contratuais, divórcios, heranças e outros processos cíveis com eficiência.',
    },
    {
      icon: <FaGavel />,
      title: 'Direito Penal',
      description:
        'Defendemos os interesses de nossos clientes em processos criminais.',
      extraText:
        'Nossa equipe é especializada em defesa e acusação em casos criminais. Atuamos em investigações, processos judiciais e recursos, buscando sempre proteger os direitos fundamentais de nossos clientes e garantir justiça no sistema penal.',
    },
    {
      icon: <FaFileContract />,
      title: 'Direito Contratual',
      description:
        'Elaboração, revisão e análise de contratos empresariais e pessoais.',
      extraText:
        'O Direito Contratual é essencial para negócios e relações jurídicas seguras. Realizamos a elaboração e revisão de contratos empresariais, pessoais e internacionais, garantindo clareza, conformidade e proteção aos interesses de nossos clientes.',
    },
    {
      icon: <FaBuilding />,
      title: 'Direito Imobiliário',
      description:
        'Consultoria em transações imobiliárias e regularização de imóveis.',
      extraText:
        'Auxiliamos na compra, venda e regularização de imóveis, além de representar clientes em disputas relacionadas a propriedades. Nossa expertise garante segurança jurídica em todas as etapas de transações imobiliárias.',
    },
    {
      icon: <FaLeaf />,
      title: 'Direito Ambiental',
      description:
        'Defesa em questões de legislação ambiental e sustentabilidade.',
      extraText:
        'O Direito Ambiental é fundamental para empresas e indivíduos que buscam conformidade com a legislação ambiental. Atuamos em licenciamento, processos administrativos e defesa em ações de responsabilidade ambiental.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Direito Digital',
      description:
        'Atuação em privacidade, proteção de dados e crimes cibernéticos.',
      extraText:
        'No contexto digital, oferecemos suporte em proteção de dados, privacidade e defesa em crimes cibernéticos. Trabalhamos para garantir conformidade com a LGPD e segurança jurídica em operações online.',
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
