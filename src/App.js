import React from 'react';
import './App.css';
import { LanguageProvider } from './LanguageContext';
import Header from './header/Header';
import MainContent from './main/MainContent';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <LanguageProvider>
        <MainContent />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;