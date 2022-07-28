import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Intro from './Intro';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import FeaturedPage from "./components/featuredPage";

function App() { 

  const [isLoggedIn, setLoggedIn] = useState(false);
  // Values for Testing Purposes
  const [featuredClubs, setFeaturedClubs] = useState([
    {name: "Coding Outreach", description: "Coolest Club for the Coolest Kids"},
    {name: "Test 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {name: "Test 3", description: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?"}
  ]);
  
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
              <Route path="/featured-page" element={<FeaturedPage featuredClubs={featuredClubs} setFeaturedClubs={setFeaturedClubs}/>} />
              <Route path="/about" element={<Intro />} />
              <Route path="/manage-clubs" element={<About />} />
              <Route path="/asb" element={<About />} />
              <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
