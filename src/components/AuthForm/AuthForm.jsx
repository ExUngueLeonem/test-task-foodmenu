import React from 'react';
import './AuthForm.scss';


const AuthForm = () => {

    const submitHandler = (e) => {
        console.log('asdfasd')
    }

    return (
        <div className="flex-container">
            <div className="form-container">
                <div className="header">
                    <h2>Welcome Back</h2>
                    <h4>Log in</h4>
                </div>
                <div className="form">
                    <input type="email" className="form-field" placeholder="Login" />
                    <input type="password" className="form-field" placeholder="Password" />
                    <p><a href="#">Forgot Password</a></p>
                    <button onClick={(e) => {submitHandler(e)}}>LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;