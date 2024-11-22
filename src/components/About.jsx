import React, { memo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";


const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);  

const About = () => {
  
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/profile.png"
        alt="Sara"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          Arnaud Dujardin
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
        Je suis en formation diplômante en développement web qui se termine mi-décembre. Je souhaite intégrer, après cette formation, une entreprise spécialisée dans la création de sites WordPress. J'ai une expertise sur le Thème Divi et je serais ravi d'approfondir mes connaissances d'autres outils Wordpress populaires. J'ai un Bac Scientifique, un DUT en Techniques de Commercialisation et une Licence en Management. Ces expériences m'ont permis de comprendre les besoins clients et de développer des compétences en gestion de projet. Je suis passionné par la création de sites optimisés sous WordPress. Je parle anglais et je possède le permis B.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
        
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
        

        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
        </div>
        <div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);
