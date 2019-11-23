import React from 'react';
import './App.scss';

// component imports
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


// library imports
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
