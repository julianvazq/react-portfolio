import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdditionalInfo from './components/AdditionalInfo';

const theme = {
  // React color: 00d8ff
  primary: '#4B0082'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <AdditionalInfo />
    </ThemeProvider>
  );
}

export default App;
