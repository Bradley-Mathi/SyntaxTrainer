import React from 'react'
import './Login.css';
import { LoginSignup } from './LoginSignup';
import { Link } from 'react-router-dom';

export const Login = () => {

    function handleFirstButton(e: React.MouseEvent<HTMLButtonElement>) {
        e.currentTarget.style.display = "none";
    }

  return (
    <div className="login">
        <div className="card">
            <div className="card-body">
                <div className="card-section card-top">
                    <p className="card-title">Syntax Trainer</p>
                </div>
                <div className="card-section card-bottom">
                    <button type="button" 
                    id="button1"
                    className="btn btn-success" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#login-signup-id" 
                    onClick={(e) => handleFirstButton(e)}>Login/Sign Up
                    </button>
                    <LoginSignup />
                    <Link to="/"><button type="button" className="btn btn-light">Continue as Guest</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
