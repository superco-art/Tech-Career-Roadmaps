import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface NavigationProps {
  breadcrumbs: string[];
  onBack: () => void;
  onHome: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ breadcrumbs, onBack, onHome, isDarkMode, onToggleDarkMode }) => {
  return (
    <nav className={`border-b shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-dark-surface border-dark-border backdrop-blur-sm bg-opacity-95' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onHome}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? 'text-dark-muted hover:text-soft-blue hover:bg-dark-card hover:shadow-soft-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Inicio</span>
            </button>
            
            {breadcrumbs.length > 1 && (
              <button
                onClick={onBack}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? 'text-dark-muted hover:text-soft-blue hover:bg-dark-card hover:shadow-soft-sm'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Volver</span>
              </button>
            )}
          </div>

          {/* Center - Breadcrumbs */}
          <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-dark-muted' : 'text-gray-500'
          }`}>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span className={`${
                  index === breadcrumbs.length - 1 
                    ? `font-medium ${isDarkMode ? 'text-dark-text' : 'text-gray-900'}` 
                    : ''
                }`}>
                  {crumb}
                </span>
                {index < breadcrumbs.length - 1 && (
                  <span className={isDarkMode ? 'text-dark-border' : 'text-gray-300'}>/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right Side - Dark Mode Toggle */}
          <div className="flex items-center">
            <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;