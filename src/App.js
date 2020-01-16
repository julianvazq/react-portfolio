import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/top/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import LifeTrackerPage from './components/projects/LifeTrackerPage';
import ScrollToTop from './components/ScrollToTop';

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
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
