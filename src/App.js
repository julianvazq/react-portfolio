import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Footer from './components/global/Footer';
import ScrollToTop from './components/ScrollToTop';
import LifeTrackerPage from './components/projects/LifeTrackerPage';
import PetMatcherPage from './components/projects/PetMatcherPage';
// import PGFinderPage from './components/projects/PGFinderPage';
import ExoticPetStorePage from './components/projects/ExoticPetStorePage';
// import TypingTestPage from './components/projects/TypingTestPage';
import ExerciseSitePage from './components/projects/ExerciseSitePage';
import MovieExplorerPage from './components/projects/MovieExplorerPage';
import Navbar from './components/global/Navbar';
import { AnimatePresence } from 'framer-motion';
import ECommercePage from './components/projects/EcommercePage';
import ListifyPage from './components/projects/ListifyPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/e-commerce' component={ECommercePage} />
          <Route path='/life-tracker' component={LifeTrackerPage} />
          <Route path='/pet-matcher' component={PetMatcherPage} />
          {/* <Route path='/pg-finder' component={PGFinderPage} /> */}
          <Route path='/exotic-pet-store' component={ExoticPetStorePage} />
          {/* <Route path='/js-typing-test' component={TypingTestPage} /> */}
          <Route path='/exercise-site' component={ExerciseSitePage} />
          <Route path='/movie-explorer' component={MovieExplorerPage} />
          <Route path='/listify' component={ListifyPage} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
