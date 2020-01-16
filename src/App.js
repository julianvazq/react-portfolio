import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/top/Navbar';
import Home from './components/Home';
import LifeTrackerPage from './components/projects/LifeTrackerPage';

const theme = {
  // React color: 00d8ff
  primary: '#60b0f4'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/life-tracker' component={LifeTrackerPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
