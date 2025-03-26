import { SectionWrapper } from './Home.styles';
import HeroSection from '../../components/HeroSection/HeroSection';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionWrapper bgColor="#FFFF" borderColor="#FFFF">
        <Section />
      </SectionWrapper>
      <SectionWrapper bgColor="#D9D2A6" borderColor="#000000">
        <Card />
      </SectionWrapper>
      <SectionWrapper bgColor="#1B1B1B" borderColor="#FFFFFF">
        <ContactForm />
      </SectionWrapper>
      <SectionWrapper bgColor="#D9D2A6" borderColor="#D9D2A6">
        <GoogleMap title={'Nossa Localização'} />
      </SectionWrapper>
    </>
  );
};

export default Home;
