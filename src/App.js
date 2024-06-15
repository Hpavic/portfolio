import React from 'react';
import './App.css';
import { LanguageProvider } from './LanguageContext';
import Header from './header/Header';
import MainContent from './components/main/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </div>
  );
}

export default App;