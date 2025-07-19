import React from 'react'
import { useState } from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {

    const [loginState, setLoginState] = useState("login");
    
  return (
    <div className="collapse" id="login-signup-id">
        <div>
            <div className="login-signup">
                <div className="login-signup-section">
                    <p className="email">Email</p>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                </div>
                <div className="login-signup-section">
                    <p className="password">Password</p>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                </div>
                <div className="collapse" id="confirm-password">
                    <p className="confirm-password">Confirm Password</p>
                    <input type="password" className="form-control" id="confirm-password-2" placeholder="Confirm Password"/>
                </div>
                <div className="swap-login">
                    {loginState === "login" ? <h6>Don't have an account? Sign up <span data-bs-toggle="collapse" data-bs-target="#confirm-password" onClick={() => setLoginState("signup")}>here</span></h6> 
                    : (loginState === "signup" ? <h6>Already have an account? Log in <span data-bs-toggle="collapse" data-bs-target="#confirm-password" onClick={() => setLoginState("login")}>here</span></h6> : <></>)}
                </div>
                <button type="button" className="btn btn-outline-success">{loginState === "login" ? <>Log In</> : (loginState === "signup" ? <>Sign Up</> : <></>)}</button>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}
