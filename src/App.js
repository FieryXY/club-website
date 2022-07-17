import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import FeaturedPage from "./components/featuredPage";

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        <Routes>
          <Route path="/featured-page" element={<FeaturedPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
