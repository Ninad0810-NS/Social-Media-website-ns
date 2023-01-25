import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">NS-Social</h3>
                    <span className="loginDesc">NS-Social helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' className="loginInput" />
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <input placeholder='Password Again' className="loginInput" />
                        <button className="loginbutton">Sign Up</button>
                        <button className="loginRegistorbutton">Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register