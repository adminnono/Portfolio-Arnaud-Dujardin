import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arnaud.dujardin76@gmail.com",
      href: "mailto:arnaud.dujardin76@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 7 81 97 53 31",
      href: "tel:+33781975331",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Saint-Symphorien, France",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ensemble !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Restons en contact
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Je suis toujours intéressé par de nouveaux défis et
              collaborations. N'hésitez pas à me contacter pour discuter de
              votre projet.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message envoyé !
                </h3>
                <p className="text-slate-300">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-400 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-400 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-400 transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-400 resize-none transition-colors"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
