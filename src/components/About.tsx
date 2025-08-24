import React from "react";
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      name: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Sass"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Express", "MySQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "UI/UX",
      technologies: ["Figma", "Canva"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "SEO",
      technologies: [
        "Google Search Console",
        "Lighthouse",
        "Google My Business",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { icon: Code, label: "Projets réalisés", value: "50+" },
    { icon: Users, label: "Clients satisfaits", value: "25+" },
    { icon: Award, label: "Années d'expérience", value: "2+" },
    { icon: Coffee, label: "Tasses de café", value: "1000+" },
  ];

  return (
    <section
      id="apropos"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné dans la création d'applications web et mobiles
            modernes. Je transforme les idées en solutions digitales innovantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Description */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Développement Full Stack
                  </h3>
                  <p className="text-slate-300">
                    Expertise complète du frontend au backend, avec une
                    attention particulière à l'expérience utilisateur et aux
                    performances.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Palette className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Design & UX
                  </h3>
                  <p className="text-slate-300">
                    Création d'interfaces intuitives et esthétiques, en
                    collaboration étroite avec les équipes design.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Performance & Innovation
                  </h3>
                  <p className="text-slate-300">
                    Optimisation continue et veille technologique pour rester à
                    la pointe des innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-cyan-400 transition-colors duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-white mb-12">
            Compétences Techniques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {skill.name}
                </h4>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <div key={tech} className="text-slate-300 text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
