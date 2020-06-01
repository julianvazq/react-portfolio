import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
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
import Navbar from './components/top/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
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
      </AnimatePresence>
    </>
  );
}

export default App;
