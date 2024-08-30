import Navigation from "../NavPage/Navigation";
import Header from "../HomePage/HomePage/Header";
import "./contact.css";
import { useState } from "react";
import Footer from "../Footer/Footer";

export default function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState({});

  const validate = () => {
    let errors = {};

    if (!name) errors.name = "El nombre no puede ir vacío";
    if (!email) errors.email = "El email no puede ir vacío";
    if (!message) errors.message = "El mensaje no puede ir vacío";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setEmailSent("Mensaje enviado con éxito!");
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setEmailSent(false);
      }, 3000);
    } else {
      setFailed(errors);
    }
  };

  return (
    <div>
      <Header />
      <Navigation />
      <div className="title-contact-container">
        <h2 className="title-contact">¡Contáctanos!</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {failed.name && <p className="failed">{failed.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {failed.email && <p className="failed">{failed.email}</p>}

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {failed.message && <p className="failed">{failed.message}</p>}

          <div className="btn-form-container">
            <button
              className="btn-form"
              type="submit"
              style={{ backgroundColor: emailSent ? "green" : "#e1a88f" }}
            >
              {emailSent ? "Enviado con éxito!" : "Enviar"}
            </button>
          </div>
        </div>
      </form>
      <Footer/>
    </div>
    
  );
}
