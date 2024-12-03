import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 15px;
  }

  label {
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: ${(props) => props.theme.color.secundary};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.4;
  }
`;

const ContactForm = () => {
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
      <h2>Fale conosco</h2>
      <p>
        Preencha o formulário e entraremos em contato o mais rápido possível!
      </p>
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
