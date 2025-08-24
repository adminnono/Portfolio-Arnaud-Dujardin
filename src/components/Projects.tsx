import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  ChefHat,
} from "lucide-react";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Pierre Gourmet",
      description: "Critique gastronomique sur Paris",
      image: "/images/pierre.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
      category: "frontend",
      github: "https://github.com/adminnono/pierre-gourmet",
      demo: "https://pierre-gourmet.vercel.app/",
    },
    {
      id: 2,
      title: "Recettes de cuisine",
      description:
        "Application pour chercher et cuisiner une recette de cuisine",
      image: "/images/recette.gif",
      technologies: ["API", "React", "Vite", "Tailwind", "TypeScript"],
      category: "frontend",
      github: "https://github.com/adminnono/recettes-de-cuisine",
      demo: "https://recettes-de-cuisine-xi.vercel.app/",
    },
    {
      id: 3,
      title: "Recherche de films",
      description:
        "Application Web pour trouver un film et l'ajouter à sa liste des coups de coeur",
      image: "/images/film.gif",
      technologies: [
        "API",
        "React",
        "Vite",
        "Tailwind",
        "TypeScript",
        "LocalStorage",
      ],
      category: "frontend",
      github: "https://github.com/adminnono/recherche-de-films",
      demo: "https://recherche-de-films.vercel.app/",
    },
    {
      id: 4,
      title: "ParisBnB",
      description:
        "Application qui permet la location de logements sur Paris et ses alentours",
      image: "/images/parisbnb.gif",
      technologies: ["React", "TypeScript", "Tailwind", "Vercel"],
      category: "frontend",
      github: "https://github.com/adminnono/paris-bnb",
      demo: "https://paris-bnb.vercel.app/",
    },
    {
      id: 5,
      title: "Todo List",
      description:
        "Application de Todo List qui permet de gérer ses tâches en focntion de leur importance avec la possiblité d'ajouter et de supprimer des tâches.",
      image: "/images/to-do.gif",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Vercel",
        "DaisyUI",
        "Lucide-React",
      ],
      category: "frontend",
      github: "https://github.com/adminnono/Todo-List",
      demo: "https://todo-list-lovat-phi-60.vercel.app/",
    },
  ];

  const categories = [
    { key: "all", label: "Tous", icon: Globe },
    { key: "frontend", label: "Frontend", icon: ChefHat },
    { key: "backend", label: "Backend", icon: Smartphone },
    { key: "fullstack", label: "Fullstack", icon: Code },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projets" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div
            className="
      flex flex-wrap md:flex-nowrap
      justify-center
      bg-slate-800/50 
      rounded-2xl 
      p-2
      backdrop-blur-sm
      gap-2
    "
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`
            px-4 md:px-6 
            py-2 md:py-3 
            rounded-full 
            flex items-center 
            space-x-2 
            transition-all duration-300
            ${
              filter === category.key
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }
          `}
                >
                  <Icon size={18} />
                  <span className="whitespace-nowrap">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="p-3 bg-slate-900/80 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-slate-900/80 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
