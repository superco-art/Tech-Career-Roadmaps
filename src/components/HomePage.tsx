import React from 'react';
import { Code, Brain, Shield, Cloud } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface HomePageProps {
  onFieldSelect: (fieldId: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onFieldSelect, isDarkMode, onToggleDarkMode }) => {
  const fields = [
    {
      id: 'programming',
      title: 'Programación',
      description: 'Domina el desarrollo de software y aplicaciones',
      icon: Code,
      gradient: isDarkMode ? 'from-neon-blue to-neon-purple' : 'from-blue-500 to-purple-600',
      hoverGradient: isDarkMode ? 'from-soft-blue to-soft-purple' : 'from-blue-600 to-purple-700',
      shadow: isDarkMode ? 'shadow-soft-md' : 'shadow-xl'
    },
    {
      id: 'ai',
      title: 'Inteligencia Artificial',
      description: 'Construye sistemas inteligentes y automatizados',
      icon: Brain,
      gradient: isDarkMode ? 'from-soft-green to-soft-cyan' : 'from-green-500 to-teal-600',
      hoverGradient: isDarkMode ? 'from-soft-green to-soft-cyan' : 'from-green-600 to-teal-700',
      shadow: isDarkMode ? 'shadow-soft-green' : 'shadow-xl'
    },
    {
      id: 'cybersecurity',
      title: 'Ciberseguridad',
      description: 'Protege sistemas y datos contra amenazas',
      icon: Shield,
      gradient: isDarkMode ? 'from-soft-red to-soft-pink' : 'from-red-500 to-pink-600',
      hoverGradient: isDarkMode ? 'from-soft-red to-soft-pink' : 'from-red-600 to-pink-700',
      shadow: isDarkMode ? 'shadow-soft-pink' : 'shadow-xl'
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      description: 'Infraestructura y servicios en la nube',
      icon: Cloud,
      gradient: isDarkMode ? 'from-soft-purple to-soft-indigo' : 'from-indigo-500 to-blue-600',
      hoverGradient: isDarkMode ? 'from-soft-purple to-soft-indigo' : 'from-indigo-600 to-blue-700',
      shadow: isDarkMode ? 'shadow-soft-purple' : 'shadow-xl'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
      </div>

      {/* Header */}
      <header className="text-center py-12 px-4">
        <h1 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
          isDarkMode ? 'text-dark-text' : 'text-gray-800'
        }`}>
          Tech Career Roadmaps
        </h1>
        <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
          isDarkMode ? 'text-dark-muted' : 'text-gray-600'
        }`}>
          Guía visual e interactiva para iniciar o avanzar en tu carrera tecnológica.
          Explora roadmaps detallados y descubre las rutas de aprendizaje más efectivas.
        </p>
      </header>

      {/* Fields Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((field) => (
            <div
              key={field.id}
              onClick={() => onFieldSelect(field.id)}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${field.shadow} hover:${field.shadow}`}
            >
              <div className={`bg-gradient-to-br ${field.gradient} group-hover:${field.hoverGradient} rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-300`}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}>
                  <div className="absolute inset-0 bg-white transform rotate-12 scale-110"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <field.icon className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-3">{field.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{field.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={`text-center py-8 px-4 transition-colors duration-300 ${
        isDarkMode ? 'text-dark-muted' : 'text-gray-500'
      }`}>
        <p>Selecciona un campo para explorar su roadmap interactivo</p>
      </footer>
    </div>
  );
};

export default HomePage;