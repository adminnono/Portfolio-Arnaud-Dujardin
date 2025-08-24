import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/adminnono", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arnaud-dujardin-904480284/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:arnaud.dujardin76@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Arnaud Dujardin
            </div>
            <p className="text-slate-400 leading-relaxed">
              Développeur web passionné créant des expériences digitales
              exceptionnelles
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Accueil", "Projets", "À propos", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase().replace("à propos", "apropos")}`
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon
                      size={20}
                      className="text-slate-400 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            ↑ Retour en haut
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
