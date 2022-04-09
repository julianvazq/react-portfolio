import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';

const theme = {
    primary: '#60b0f4',
    secondary: '#f0f4f6',
    gray: 'hsl(0, 0%, 50%)',
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);
