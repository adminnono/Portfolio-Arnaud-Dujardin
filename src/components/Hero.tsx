import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projets");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234f46e5" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] animate-pulse'></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
              <img
                src="/images/profil.jpg"
                alt="Profil"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Développeur Web
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Front-End React
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Je crée des applications web modernes et performantes avec les
          dernières technologies
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/adminnono"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
          >
            <Github
              size={24}
              className="text-slate-300 group-hover:text-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arnaud-dujardin-904480284/"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin
              size={24}
              className="text-slate-300 group-hover:text-white"
            />
          </a>
          <a
            href="mailto:arnaud.dujardin76@gmail.com"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
          >
            <Mail size={24} className="text-slate-300 group-hover:text-white" />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          Voir mes projets
          <ChevronDown className="ml-2 animate-bounce" size={20} />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-cyan-500/20 rounded-full animate-float-delay"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-orange-500/20 rounded-full animate-float-slow"></div>
    </section>
  );
};

export default Hero;
