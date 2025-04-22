import { InfoContainer } from "./Location.styles";
import GoogleMap from "../GoogleMap/GoogleMap";
import { LocationContainer } from "./Location.styles";

const Location = () => {
  return (
    <LocationContainer>
      <GoogleMap title={'Nossa Localização'} containerStyles={{ display: 'flex' }} iframeStyles={{
        width: '100%',
        height: '500px',
      }} />
      <InfoContainer>
        <h2>
          Visite nosso escritório
        </h2>
        <p>Estamos localizados na Rua Cel. Lindolfo Rodrigues da Cunha, 101 - Rosário, Araguari - MG, 38440-083. Nossa equipe está sempre pronta para lhe atender com toda a atenção que você merece.
        </p>
      </InfoContainer>
    </LocationContainer>

  );
}
export default Location;