import { useTrail, animated } from "react-spring";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiVisualstudiocode,
  SiWordpress,
  SiPhp,
  SiFigma, // <- Ajout de Figma ici
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { SiNotion } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import {
  SiBootstrap,
  SiSass,
  SiVite,
  SiJquery,
  SiGutenberg,
} from "react-icons/si";
import { SiWoocommerce, SiElementor } from "react-icons/si";

// Liste des compétences avec leurs icônes
const skills = [
  { id: "wordpress", Component: SiWordpress, link: "/Wordpress.pdf" },
  { id: "elementor", Component: SiElementor, link: "/elementor.pdf" },
  { id: "gutenberg", Component: SiGutenberg, link: "/gutenberg.pdf" },
  { id: "woocommerce", Component: SiWoocommerce, link: "/woocommerce.pdf" },
  { id: "vscode", Component: SiVisualstudiocode, link: "/vsc.pdf" },
  { id: "html", Component: FaHtml5, link: "/html&css.pdf" },
  { id: "css", Component: FaCss3Alt, link: "/html&css.pdf" },
  { id: "sass", Component: SiSass, link: "/sass.pdf" },
  { id: "bootstrap", Component: SiBootstrap, link: "/bootstrap.pdf" },
  { id: "php", Component: SiPhp, color: "#8993BE", link: "/Php.pdf" },
  { id: "mysql", Component: SiMysql, link: "/Php.pdf" },
  { id: "javascript", Component: SiJavascript, link: "/javascript.pdf" },
  { id: "jquery", Component: SiJquery, link: "/jquery.pdf" },
  { id: "react", Component: FaReact, link: "/react.pdf" },
  { id: "vite", Component: SiVite, link: "/vite.pdf" },
  { id: "github", Component: DiGithubBadge, link: "/github.pdf" },
  { id: "git", Component: SiGit, link: "/github.pdf" },
  { id: "figma", Component: SiFigma, link: "/figma.pdf" },
  { id: "notion", Component: SiNotion, link: "/notion.pdf" },
];

{
  skills.map(({ id, Component, link }) => (
    <a
      key={id}
      href={link}
      className="btn btn-outline-primary m-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Component size={id === "woocommerce" ? 72 : 48} />
    </a>
  ));
}

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-darkDesert mb-6">
          Mes compétences
        </h2>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { Component, link, id } = skills[index];

            const iconSize = id === "woocommerce" ? 72 : 48;

            return (
              <animated.div
                style={props}
                className="text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
                key={skills[index].id}
              >
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Component size={iconSize} />
                  </a>
                ) : (
                  <Component size={iconSize} />
                )}
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
