import React from "react";
import { useSpring, animated } from "react-spring";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import landingImg from "/dev-icon.svg";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div
      id="home"
      className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen"
    >
      <animated.img
        style={logoSpring}
        className="w-fit mb-4"
        src={landingImg}
        alt="Trumpet with tentacle logo"
      />

      {/* Texte explicatif avec une taille plus grande */}
      <p className="text-darkDesert text-center text-2xl font-semibold mb-4">
        Cliquez sur le bouton <strong>Texte</strong> ci-dessous pour accéder à mon <strong>CV.</strong>
      </p>

      {/* Boutons centrés */}
      <animated.div
        style={iconSpring}
        className="flex flex-col items-center justify-center mt-2"
      >
        <div className="flex space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-10 h-10" />
            <span className="sr-only">Compte GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-10 h-10" />
            <span className="sr-only">Compte Linkedin</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaFileAlt className="w-10 h-10" />
            <span className="sr-only">CV</span>
          </a>
        </div>
      </animated.div>
    </div>
  );
}
