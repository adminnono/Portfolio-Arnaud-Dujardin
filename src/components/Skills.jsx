import { useTrail, animated } from "react-spring";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Icônes FontAwesome
import { SiJavascript, SiVisualstudiocode, SiWordpress, SiPhp } from "react-icons/si"; // Icônes Simple Icons
import { DiGithubBadge } from "react-icons/di"; // Icône GitHub Badge

// Liste des compétences avec leurs icônes
const skills = [
  { id: "html", Component: FaHtml5, link: "/html&css.pdf" },
  { id: "css", Component: FaCss3Alt, link: "/html&css.pdf" },
  { id: "javascript", Component: SiJavascript, link: "/javascript.pdf" },
  { id: "react", Component: FaReact, link: "/react.pdf" },
  { id: "wordpress", Component: SiWordpress, link: "/Wordpress.pdf" },
  { id: "php", Component: SiPhp, color: "#8993BE", link: "/Php.pdf" },
  { id: "vscode", Component: SiVisualstudiocode, link: "/html&css.pdf" },
  { id: "github", Component: DiGithubBadge, link: "/github.pdf" },
];


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
        <h2 className="text-4xl font-bold text-darkDesert mb-6">Mes compétences</h2>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { Component, link } = skills[index];
            return (
              <animated.div
                style={props}
                className="text-5xl text-goldDesert transition-all duration-300 transform hover:scale-110 hover:text-darkDesert"
                key={skills[index].id}
              >
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Component />
                  </a>
                ) : (
                  <Component />
                )}
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
