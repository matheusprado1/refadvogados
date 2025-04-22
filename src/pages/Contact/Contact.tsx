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
            <strong>Telefone:</strong> (34) 98866-9798
          </p>
          <p>
            <strong>E-mail:</strong> email@email.com
          </p>
          <p>
            <strong>Horário de Funcionamento:</strong> Segunda a Sexta: 08h às
            18h
          </p>
          <p>
            <strong>Modalidades de Atendimento:</strong> Presencial ou Telepresencial
          </p>
        </Info>
        <MapFormContainer>
          <StyledForm>
            <ContactForm title="Dúvidas?" />
          </StyledForm>
          <StyledMap>
            <GoogleMap
              title="Venha nos visitar"
              containerStyles={{ flexDirection: 'column' }}
              iframeStyles={{
                width: '100%',
                height: '300px',
              }}
            />
          </StyledMap>
        </MapFormContainer>
      </Content>
    </Container>
  );
};

export default Contact;
