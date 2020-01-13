import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/top/Navbar';
import Hero from './components/top/Hero';
import AdditionalInfo from './components/top/AdditionalInfo';
import ProjectSection from './components/middle/ProjectSection.js';

const theme = {
  // React color: 00d8ff
  primary: '#60b0f4'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <AdditionalInfo />
      <ProjectSection />
    </ThemeProvider>
  );
}

export default App;
