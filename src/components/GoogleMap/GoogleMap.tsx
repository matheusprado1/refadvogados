import { Container, Info } from './GoogleMap.styles';

const GoogleMap = ({
  title = 'Localização',
  containerStyles,
  iframeStyles,
}) => {
  return (
    <Container style={containerStyles}>
      <div style={{ ...iframeStyles }}>
        <h2>{title}</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.389676706399!2d-48.19077252401537!3d-18.646501699629326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a431b87586bc8f%3A0xb012b69945de1a12!2sR.%20Cel.%20Lindolfo%20Rodrigues%20da%20Cunha%2C%20101%20-%20Ros%C3%A1rio%2C%20Araguari%20-%20MG%2C%2038440-083!5e0!3m2!1spt-BR!2sbr!4v1732819822541!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default GoogleMap;
