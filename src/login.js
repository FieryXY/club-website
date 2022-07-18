import React, {useState} from 'react';
import { render } from 'react-dom';
import "./login.css" 
import "./ClubService.js";
import ClubService from './ClubService.js';
const Login = (props) => {

    const [userName, setUserName] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [badLogin, setBadLogin] = useState("");
    const makeVisibleCSS = {
        opacity: 1,
        visibility: "visible"
      };
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const onLogin = (e) => {
        ClubService.doLogin().then(response => response.json()).then(json => {
            if(json["type"] === "success") {
                localStorage.setItem("accessToken", json["token"]);
                props.setLoggedIn(true);
                //redirect to designated club description page
            }
            else if(json["type"] === "fail") {
                setBadLogin(json["failType"]);
            }
        });
    } 
    return ( 
    <div className = "user-modal">
    <div className="user-modal-container">
        <ul className="switcher">
            <li><h3>Sign in</h3></li>
        </ul>
            
        <div id="login">
            <div className="form">
                <p className="fieldset">
                    <label className="image-replace email" for="signin-email">E-mail</label>
                    <input onChange = {changeUserName} value = {userName} className="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail"/>
                    <span style = {(badLogin === "email") ? makeVisibleCSS : null} className="error-message">An account with this email address does not exist!</span>
                </p>

                <p className="fieldset">
                    <label className="image-replace password" for="signin-password">Password</label>
                    <input onChange = {changePassword} value = {password} className="full-width has-padding has-border" id="signin-password" type="password"  placeholder="Password"/>
                    <a href="#0" className="hide-password">Show</a>
                    <span style = {(badLogin === "password") ? makeVisibleCSS : null} className="error-message">Wrong password! Try again.</span>
                </p>

                <p className="fieldset">
                    <input type="checkbox" id="remember-me" checked/>
                    <label for="remember-me">Remember me</label>
                </p>

                <p className="fieldset">
                    <div onClick className="full-width" value="Login"/> 
                </p>
            </div>
            
            <p className="form-bottom-message"><a href="#0">Forgot your password?</a></p>
        
        </div>
    </div>
        

    </div>
    );
    
    
}
export default Login;
