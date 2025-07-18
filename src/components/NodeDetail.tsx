import React from 'react';
import { X, Clock, Target, Book, ExternalLink } from 'lucide-react';
import { SubNode } from '../types';

interface NodeDetailProps {
  subNode: SubNode;
  onClose: () => void;
  isDarkMode: boolean;
}

const NodeDetail: React.FC<NodeDetailProps> = ({ subNode, onClose, isDarkMode }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return isDarkMode ? 'bg-neon-green bg-opacity-20 text-neon-green border border-neon-green border-opacity-30' : 'bg-green-100 text-green-800';
      case 'Intermediate': return isDarkMode ? 'bg-neon-yellow bg-opacity-20 text-neon-yellow border border-neon-yellow border-opacity-30' : 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return isDarkMode ? 'bg-neon-red bg-opacity-20 text-neon-red border border-neon-red border-opacity-30' : 'bg-red-100 text-red-800';
      default: return isDarkMode ? 'bg-dark-border text-dark-muted' : 'bg-gray-100 text-gray-800';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Course': return '🎓';
      case 'Documentation': return '📚';
      case 'Book': return '📖';
      case 'Tutorial': return '🎯';
      case 'Platform': return '🌐';
      default: return '📝';
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 p-4 ${
      isDarkMode ? 'bg-black bg-opacity-70 backdrop-blur-sm' : 'bg-black bg-opacity-50'
    }`}>
      <div className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
        isDarkMode 
          ? 'bg-dark-surface shadow-2xl shadow-neon-blue/20 border border-dark-border' 
          : 'bg-white shadow-2xl'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 border-b p-6 rounded-t-2xl transition-all duration-300 ${
          isDarkMode 
            ? 'bg-dark-surface border-dark-border' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-dark-text' : 'text-gray-900'
              }`}>{subNode.title}</h2>
              <p className={`text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-dark-muted' : 'text-gray-600'
              }`}>{subNode.description}</p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDarkMode 
                  ? 'hover:bg-dark-card hover:shadow-neon-sm text-dark-muted hover:text-neon-blue' 
                  : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Target className={`w-5 h-5 ${isDarkMode ? 'text-neon-blue' : 'text-blue-500'}`} />
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(subNode.difficulty)}`}>
                {subNode.difficulty}
              </span>
            </div>
            {subNode.estimatedTime && (
              <div className="flex items-center space-x-2">
                <Clock className={`w-5 h-5 ${isDarkMode ? 'text-neon-green' : 'text-green-500'}`} />
                <span className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-dark-muted' : 'text-gray-600'
                }`}>{subNode.estimatedTime}</span>
              </div>
            )}
          </div>

          {/* Prerequisites */}
          {subNode.prerequisites && subNode.prerequisites.length > 0 && (
            <div>
              <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-dark-text' : 'text-gray-900'
              }`}>Requisitos Previos</h3>
              <div className={`rounded-lg p-4 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-neon-orange bg-opacity-10 border-neon-orange border-opacity-30' 
                  : 'bg-orange-50 border-orange-200'
              }`}>
                <ul className="space-y-2">
                  {subNode.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${
                        isDarkMode ? 'bg-neon-orange' : 'bg-orange-400'
                      }`}></span>
                      <span className={isDarkMode ? 'text-neon-orange' : 'text-orange-800'}>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Skills */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-dark-text' : 'text-gray-900'
            }`}>Habilidades Clave</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subNode.skills.map((skill, index) => (
                <div key={index} className={`flex items-center space-x-2 rounded-lg p-3 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-neon-blue bg-opacity-10 border-neon-blue border-opacity-30' 
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-neon-blue' : 'bg-blue-500'
                  }`}></span>
                  <span className={`font-medium ${
                    isDarkMode ? 'text-neon-blue' : 'text-blue-800'
                  }`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-dark-text' : 'text-gray-900'
            }`}>Recursos Recomendados</h3>
            <div className="space-y-3">
              {subNode.resources.map((resource, index) => (
                <div key={index} className={`border rounded-lg p-4 transition-all duration-200 ${
                  isDarkMode 
                    ? 'border-dark-border hover:border-neon-purple hover:shadow-neon-sm bg-dark-card' 
                    : 'border-gray-200 hover:shadow-md bg-white'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{getResourceIcon(resource.type)}</span>
                      <div>
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          isDarkMode ? 'text-dark-text' : 'text-gray-900'
                        }`}>{resource.title}</h4>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-dark-muted' : 'text-gray-600'
                        }`}>{resource.provider}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-dark-border text-dark-muted' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {resource.type}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            resource.free 
                              ? isDarkMode 
                                ? 'bg-neon-green bg-opacity-20 text-neon-green border border-neon-green border-opacity-30' 
                                : 'bg-green-100 text-green-800'
                              : isDarkMode 
                                ? 'bg-neon-orange bg-opacity-20 text-neon-orange border border-neon-orange border-opacity-30' 
                                : 'bg-orange-100 text-orange-800'
                          }`}>
                            {resource.free ? 'Gratuito' : 'Pago'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <ExternalLink className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
                        isDarkMode 
                          ? 'text-dark-muted hover:text-neon-blue' 
                          : 'text-gray-400 hover:text-blue-500'
                      }`} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeDetail;