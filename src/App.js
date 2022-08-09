import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Login from './login';
import ClubProfile from './ClubProfile';
import ClubSearchPage from './ClubSearch';
import ClubEditor from './ClubEditor';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigate} from "react-router-dom";
import FeaturedPage from "./components/featuredPage";
import Modal from 'react-modal';
import ResetPassword from './ResetPassword';

Modal.setAppElement("#root"); 
function App() { 
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const logOut = () => {
    if(localStorage.getItem("accessToken") != null) {
        localStorage.removeItem("accessToken");
        setLoggedIn(false);
    }
  }

  useEffect(() => {
    if(!isLoggedIn && sessionStorage.getItem("accessToken") != null) {
      setLoggedIn(true)
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav isLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>
          <Routes>
              <Route exact path="/" element={<Navigate to="/about"/>}/>
              <Route path="/featured-page" element={<FeaturedPage />} />
              <Route path="/about" element={<Intro />} />
              <Route path="/club-search" element={<ClubSearchPage />} />
              <Route path="/club-profile/:clubId" element={<ClubProfile />} />
              <Route path="/club-editor" element={<ClubEditor />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              if(!isLoggedIn) {
                <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} />
              }
              if(isLoggedIn) {
                <Route path="/editor" element={<Intro />} />
              }
          </Routes>
      </div>
    </Router>
  );

}

export default App;
