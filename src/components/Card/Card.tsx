import { Container, Card, Button } from './Card.styles';
import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaBuilding,
  FaLeaf,
  FaLaptopCode,
} from 'react-icons/fa';

const Specialties = () => {
  const specialties = [
    {
      icon: <FaBalanceScale />,
      title: 'Direito Civil',
      description:
        'Atuamos em ações relacionadas a contratos, obrigações e direito de família.',
    },
    {
      icon: <FaGavel />,
      title: 'Direito Penal',
      description:
        'Defendemos os interesses de nossos clientes em processos criminais.',
    },
    {
      icon: <FaFileContract />,
      title: 'Direito Contratual',
      description:
        'Elaboração, revisão e análise de contratos empresariais e pessoais.',
    },
    {
      icon: <FaBuilding />,
      title: 'Direito Imobiliário',
      description:
        'Consultoria em transações imobiliárias e regularização de imóveis.',
    },
    {
      icon: <FaLeaf />,
      title: 'Direito Ambiental',
      description:
        'Defesa em questões de legislação ambiental e sustentabilidade.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Direito Digital',
      description:
        'Atuação em privacidade, proteção de dados e crimes cibernéticos.',
    },
  ];

  return (
    <Container>
      <h2>Especialidades</h2>
      <div>
        {specialties.map((item, index) => (
          <Card key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
      <Button
        onClick={() => { window.location.href = `https://wa.me/5534988669798`; }}
      >
        Falar com Especialistas
      </Button>
    </Container >
  );
};

export default Specialties;
