import React, { useState } from 'react';
import HomePage from './components/HomePage';
import RoadmapView from './components/RoadmapView';
import Navigation from './components/Navigation';
import { roadmapsData } from './data/roadmaps';
import { Field } from './types';
import { useDarkMode } from './hooks/useDarkMode';
import './styles/animations.css';

type ViewState = 'home' | 'roadmap';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedField, setSelectedField] = useState<Field | null>(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleFieldSelect = (fieldId: string) => {
    const field = roadmapsData[fieldId];
    if (field) {
      setSelectedField(field);
      setCurrentView('roadmap');
    }
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedField(null);
  };

  const handleHome = () => {
    setCurrentView('home');
    setSelectedField(null);
  };

  const getBreadcrumbs = (): string[] => {
    const breadcrumbs = ['Tech Roadmaps'];
    if (selectedField) {
      breadcrumbs.push(selectedField.title);
    }
    return breadcrumbs;
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
    }`}>
      {currentView !== 'home' && (
        <Navigation
          breadcrumbs={getBreadcrumbs()}
          onBack={handleBack}
          onHome={handleHome}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      )}
      
      <main className="transition-all-smooth">
        {currentView === 'home' && (
          <div className="animate-fadeIn">
            <HomePage 
              onFieldSelect={handleFieldSelect} 
              isDarkMode={isDarkMode}
              onToggleDarkMode={toggleDarkMode}
            />
          </div>
        )}
        
        {currentView === 'roadmap' && selectedField && (
          <div className="animate-slideIn">
            <RoadmapView field={selectedField} isDarkMode={isDarkMode} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;