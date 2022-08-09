import React, { useState } from 'react';
import "./index.css"
import "./ResetPassword.css"
import ClubService from './ClubService.js';

const ResetPassword = () => {

    const [email, setEmail] = useState("");

    const onSendEmail = () => {
        ClubService.doSendEmail(email).then(response => {
            if(response["status"] === 500) {
                alert("Invalid Username")
            }
        });
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return(
        <>
            <h1 className='reset-text'>Reset Password</h1>
            <div className='reset-password'>
                <input id="resetEmail" onChange={handleChange} value={email} className='email-input' placeholder='Enter your email' />
                <button className='submit' onClick={onSendEmail}>Submit</button>
            </div>
        </>
    );
}

export default ResetPassword;
