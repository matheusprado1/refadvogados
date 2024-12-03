import styled from 'styled-components';
import HeroSection from '../../components/HeroSection';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Map from '../../components/Map';
import ContactForm from '../../components/ContactForm';

// const Teste = styled.div`
//   background-color: #fff;
//   padding: 2% 7%;
//   color: black;
// `
// const Container = styled.div`
//   margin-top: 50px;
// `
const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.color.secundary};
  margin: 20px 0;
`;

const Home = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <Section />
      <Divider />
      <Card />
      <Divider />
      <ContactForm />
      <Divider />
      <Map />
    </>
  );
};

export default Home;
