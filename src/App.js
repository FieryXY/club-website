import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
          <Routes>
              <Route path="/manage-clubs" element={<About />} />
              <Route path="/asb" element={<About />} />
              <Route path="/login" element={<About />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
