import { useState } from 'react';
import { Container } from './ContactForm.styles';

const ContactForm = ({
  title = 'Fale conosco',
  description = 'Preencha o formulário e entraremos em contato o mais rápido possível!',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // lógica de envio
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mensagem:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </Container>
  );
};

export default ContactForm;
