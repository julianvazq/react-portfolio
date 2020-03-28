import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/top/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LifeTrackerPage from './components/projects/LifeTrackerPage';
import PetMatcherPage from './components/projects/PetMatcherPage';
import PGFinderPage from './components/projects/PGFinderPage';
import ExoticPetStorePage from './components/projects/ExoticPetStorePage';
import TypingTestPage from './components/projects/TypingTestPage';
import ExerciseSitePage from './components/projects/ExerciseSitePage';
import MovieExplorerPage from './components/projects/MovieExplorerPage';

const theme = {
  primary: '#60b0f4',
  secondary: '#f0f4f6',
  gray: 'hsl(0, 0%, 55%)'
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
          <Route path='/pet-matcher' component={PetMatcherPage} />
          <Route path='/pg-finder' component={PGFinderPage} />
          <Route path='/exotic-pet-store' component={ExoticPetStorePage} />
          <Route path='/js-typing-test' component={TypingTestPage} />
          <Route path='/exercise-site' component={ExerciseSitePage} />
          <Route path='/movie-explorer' component={MovieExplorerPage} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
