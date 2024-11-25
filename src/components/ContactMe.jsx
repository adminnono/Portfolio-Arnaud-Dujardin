import React, { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { useSpring, animated } from "react-spring";
import { toast } from "react-toastify";
import './ContactMe.css';

// Variables d'environnement pour EmailJS
const serviceId = import.meta.env.VITE_SERVICE; // Service ID
const templateId = import.meta.env.VITE_TEMPLATE; // Template ID
const apiKey = import.meta.env.VITE_API; // Public API Key

// Composant d'entrée pour les champs du formulaire
const InputField = ({ type, name, placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-3 rounded w-full shadow-md focus:border-goldDesert transition-colors duration-200"
    value={value}
    onChange={onChange}
    required
  />
);

export default function ContactMe() {
  const contactSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Gestion des changements de champs pour maintenir la performance
  const handleNameChange = useCallback((e) => setName(e.target.value), []);
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handleMessageChange = useCallback((e) => setMessage(e.target.value), []);

  // Validation et envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation de l'email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Envoi du formulaire avec EmailJS
    emailjs.sendForm(serviceId, templateId, e.target, apiKey).then(
      (result) => {
        console.log("result text", result.text);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Votre message a été envoyé avec succès !");
      },
      (error) => {
        console.log("error", error.text);
        setError(
          "Oops! Il semble qu'il y ait une erreur avec le Javascript du site. Si vous avez besoin de contacter Arnaud, son mail est : arnaud.dujardin76@gmail.com"
        );
        toast.error("Oups ! Un problème s'est produit. Veuillez réessayer plus tard.");
      }
    );
  };

  return (
    <animated.section
      id="contact-me"
      className="flex flex-col items-center justify-center bg-lightDesert p-8 rounded-lg shadow-md min-h-screen"
      style={contactSpring}
    >
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-darkDesert mb-6 text-center">
          Contactez-Moi
        </h1>
        {success ? (
          <div id="centerImage">
            <img src="../public/images/envoye.png" alt="Success" className="rounded-3xl" />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              placeholder="Nom"
              value={name}
              onChange={handleNameChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-3 rounded w-full h-24 shadow-md focus:border-goldDesert transition-colors duration-200"
              value={message}
              onChange={handleMessageChange}
              required
            />
            <button
              type="submit"
              className="bg-darkDesert text-lightDesert py-3 px-4 rounded w-full font-bold hover:bg-goldDesert transition-colors duration-300 shadow-md"
            >
              Envoyer votre message
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </form>
        )}
      </div>
    </animated.section>
  );
}
