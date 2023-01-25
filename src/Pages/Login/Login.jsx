import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">NS-Social</h3>
                    <span className="loginDesc">NS-Social helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <button className="loginbutton">Log In</button>
                        <snap className="loginForget">Forget Password?</snap>
                        <button className="loginRegistorbutton">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login