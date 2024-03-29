import React from 'react';
import './App.css';
import './index.css';

function Intro() {
    return (
        <div>
            <div className="clubIntroductionDiv">
                <p className="introduction">Introduction</p>
                <br />
                <p className="clubIntroductionText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="clubIntroductionBodyDiv">
                <p className="introduction">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <a href="https://www.google.com/" className="siteLink">
                <img href="https://www.countryliving.com/uk/wildlife/farming/how-to/a232/keeping-ducks/" />
                </a>
            </div>
        </div>
    );

}

export default Intro