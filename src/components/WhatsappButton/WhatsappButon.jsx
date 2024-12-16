import { ButtonContainer } from "./WhatsappButton.styles";
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = () => {
  const phoneNumber = "+5534988669798";

  return (
    <ButtonContainer
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </ButtonContainer>
  );
};

export default WhatsAppButton;
