import React, { useState } from 'react';
import "./index.css"
import "./ResetPassword.css"
import ClubService from './ClubService.js';
import {useNavigate} from "react-router-dom";

const ResetPassword = () => {

    const [email, setEmail] = useState("");

    let navigate = useNavigate();

    const onSendEmail = () => {
        ClubService.doSendEmail(email).then(response => {
            if(response["status"] === 500) {
                alert("Invalid Username")
            } else {
                alert("Email Sent! Please check your email for the link")
                navigate("/featured-page")
            }
        });

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSendEmail();
            e.preventDefault();
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return(
        <>
            <h1 className='reset-text'>Reset Password</h1>
            <div className='reset-password'>
                <input onKeyPress={handleKeyPress} id="resetEmail" 
                onChange={handleChange} value={email} className='email-input'
                    placeholder='Enter your username' />
                <button className='submit' onClick={onSendEmail}>Submit</button>
            </div>
        </>
    );
}

export default ResetPassword;
