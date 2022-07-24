import React, {useState} from 'react';
import { render } from 'react-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Login from './login';
import ClubSearchPage from './ClubSearch';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() { 

  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
              <Route path="/manage-clubs" element={<About />} />
              <Route path="/asb" element={<About />} />
              <Route path="/club-search" element={<ClubSearchPage />} />
              if(!isLoggedIn) {
                <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} />
              }
              if(isLoggedIn) {
                <Route path="/editor" element={<About />} />
              }
          </Routes>
      </div>
    </Router>
  );
}

export default App;
