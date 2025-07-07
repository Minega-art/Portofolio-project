import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ClassReflections from './components/ClassReflections';
import BestWork from './components/BestWork';
import Citations from './components/Citations';
import ContactMe from './components/ContactMe';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'reflections':
        return <ClassReflections />;
      case 'bestwork':
        return <BestWork />;
      case 'citations':
        return <Citations />;
      case 'contact':
        return <ContactMe />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;