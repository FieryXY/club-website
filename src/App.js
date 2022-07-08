import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Intro from './Intro';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
          <Routes>
              <Route path="/about" element={<Intro />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
