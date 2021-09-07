import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/global/Footer';
import Navbar from './components/global/Navbar';
import Home from './components/home/Home';
import ECommercePage from './components/projects/EcommercePage';
// import TypingTestPage from './components/projects/TypingTestPage';
import ExerciseSitePage from './components/projects/ExerciseSitePage';
// import PGFinderPage from './components/projects/PGFinderPage';
import ExoticPetStorePage from './components/projects/ExoticPetStorePage';
import LifeTrackerPage from './components/projects/LifeTrackerPage';
import ListifyPage from './components/projects/ListifyPage';
import MovieExplorerPage from './components/projects/MovieExplorerPage';
import MovieSwiperPage from './components/projects/MovieSwiperPage';
import PetMatcherPage from './components/projects/PetMatcherPage';
import Scroller from './components/projects/shared/Scroller';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <Scroller />
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/e-commerce' component={ECommercePage} />
                    <Route path='/life-tracker' component={LifeTrackerPage} />
                    <Route path='/dog-finder' component={PetMatcherPage} />
                    {/* <Route path='/pg-finder' component={PGFinderPage} /> */}
                    <Route
                        path='/exotic-pet-store'
                        component={ExoticPetStorePage}
                    />
                    {/* <Route path='/js-typing-test' component={TypingTestPage} /> */}
                    <Route path='/exercise-site' component={ExerciseSitePage} />
                    <Route
                        path='/movie-explorer'
                        component={MovieExplorerPage}
                    />
                    <Route path='/listify' component={ListifyPage} />
                    <Route path='/movie-swiper' component={MovieSwiperPage} />
                </Switch>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default App;
