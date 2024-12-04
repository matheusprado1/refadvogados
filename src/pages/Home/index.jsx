import styled from 'styled-components';
import HeroSection from '../../components/HeroSection';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Map from '../../components/Map';
import ContactForm from '../../components/ContactForm';


const SectionWrapper = styled.div`
  padding: 50px 0;
  background-color: ${(props) => props.bgColor || '#FFFFFF'};
  border-top: 5px solid ${(props) => props.borderColor || '#D9D2A6'};
  color: ${(props) => (props.bgColor === '#1B1B1B' || props.bgColor === '#000000' ? '#FFFFFF' : '#000000')};
`;

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionWrapper bgColor="#FFFFFF" borderColor="#D9D2A6">
        <Section />
      </SectionWrapper>
      <SectionWrapper bgColor="#D9D2A6" borderColor="#000000">
        <Card />
      </SectionWrapper>
      <SectionWrapper bgColor="#1B1B1B" borderColor="#FFFFFF">
        <ContactForm />
      </SectionWrapper>
      <SectionWrapper bgColor="#000000" borderColor="#D9D2A6">
        <Map />
      </SectionWrapper>
    </>
  );
};

export default Home;


