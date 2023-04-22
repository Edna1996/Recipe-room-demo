import React, { useState } from 'react';
import "./login.css";
import {  Link } from "react-router-dom"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  }

  return (
    <div className="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <h1 id="login-title">Login</h1>
        <label htmlFor="email-input">
          Email:
          <input id="email-input" type="email" value={email} onChange={handleEmailChange} />
          <span className='fa fa-lock'></span>
        </label>
        <label htmlFor="password-input">
          Password:
          <input id="password-input" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button id="login-button" type="submit">Login</button>
        <div className="login-links">
        <Link to="/resetPassword">
                <button className="shadow ml-8 bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Forgot password?</button>
             </Link>
        <span> | </span>
        <Link to="/signup">
                <button className="shadow ml-8 bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Sign up here</button>
             </Link>
      </div>
      </form>
    </div>
  );
};

export default Login;
