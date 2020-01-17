import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/top/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import LifeTrackerPage from './components/projects/LifeTrackerPage';
import ScrollToTop from './components/ScrollToTop';
import PGFinderPage from './components/projects/PGFinderPage';
import ExoticPetStorePage from './components/projects/ExoticPetStorePage';
import TypingTestPage from './components/projects/TypingTestPage';

const theme = {
  primary: '#60b0f4'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/life-tracker' component={LifeTrackerPage} />
          <Route path='/pg-finder' component={PGFinderPage} />
          <Route path='/exotic-pet-store' component={ExoticPetStorePage} />
          <Route path='/js-typing-test' component={TypingTestPage} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
