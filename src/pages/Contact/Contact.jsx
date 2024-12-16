import {
  Container,
  Content,
  Info,
  MapFormContainer,
  StyledForm,
  StyledMap,
} from './Contact.styles';
import ContactForm from '../../components/ContactForm/ContactForm';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

const Contact = () => {
  return (
    <Container>
      <h2>Fale Conosco</h2>
      <Content>
        <Info>
          <p>
            <strong>Endereço:</strong> R. Cel. Lindolfo Rodrigues da Cunha, 101
            - Rosário
          </p>
          <p>
            <strong>Telefone:</strong> (XX) XXXXX-XXXX
          </p>
          <p>
            <strong>E-mail:</strong> email@email.com
          </p>
          <p>
            <strong>Horário de Funcionamento:</strong> Segunda a Sexta: 08h às
            18h
          </p>
        </Info>
        <MapFormContainer>
          <StyledForm>
            <ContactForm title="Duvidas?" />
          </StyledForm>
          <StyledMap>
            <GoogleMap
              title="Venha nos visitar"
              containerStyles={{ flexDirection: 'column' }}
              iframeStyles={{}}
            />
          </StyledMap>
        </MapFormContainer>
      </Content>
    </Container>
  );
};

export default Contact;
