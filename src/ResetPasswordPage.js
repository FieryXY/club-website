import React, {useEffect, useState} from 'react';
import "./ResetPasswordPage.css"
import ClubService from './ClubService.js';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const ResetPasswordPage = () => {

    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    let navigate = useNavigate();

    let {code} = useParams();

    const onToggleShow = (e) => {
        setPasswordShown(!passwordShown);
    }

    useEffect(() => {
        onCheckCode()
    }, [])

    const onCheckCode = () => {
        console.log(code);
        code = code.toString();
        ClubService.doGetCode(code).then(response => {
            if(response["status"] !== 200) {
                alert("Invalid Code");
                navigate("/featured-page");
            } else {
                return response.json();
            }
        });
    }

    const onResetPassword = () => {
        if (password1 !== password2) {
            alert("Passwords are not the same")
        } else {
            ClubService.doResetPassword(password1, code).then(response => {
                if (response['status'] !== 200) {
                    alert("Invalid Code");
                    navigate('/featured-page');
                } else {
                    alert("Reset Success!");
                    navigate("/featured-page");
                }
            });

        }
    }

    const handleChange1 = (e) => {
        setPassword1(e.target.value);

    }
    const handleChange2 = (e) => {
        setPassword2(e.target.value);
    }

    return(
        <>
            <h1 className='reset-text'>Enter New Password</h1>
            <div className='reset-password'>
                <input id="resetEmail1" onChange={handleChange1} value={password1} className='email-input' placeholder='Enter your new password' type={passwordShown ? "text" : "password"} />
                <a style={{ userSelect: "none" }} onClick={onToggleShow} className="hide-password">{passwordShown ? "Hide" : "Show"}</a>
            </div>
            <br />
            <h1 className='reset-text'>Verify New Password</h1>
            <div className='reset-password'>
                <input id="resetEmail2" onChange={handleChange2} value={password2} className='email-input' placeholder='Enter your new password again' type={passwordShown ? "text" : "password"} />
                <a style={{ userSelect: "none" }} onClick={onToggleShow} className="hide-password">{passwordShown ? "Hide" : "Show"}</a>
            </div>
            <div className='reset-submit'>
                <button className='submit-button' onClick={onResetPassword}>Submit</button>
            </div>

        </>
    );
}

export default ResetPasswordPage;
