import React, { useState } from 'react';
import "./Signup.css"
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <>
    <button className='back_button'  onClick={() => navigate('/')}>Back</button>
    <div className="container">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
            className='sign-email'
            type="email"
              value={email}
              onChange={handleEmailChange}
              required
              />
          </label>
          <label>
            Password:
            <input
            className='sign-email'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
          </label>
          <button className='sign_buttton'>Sign Up</button>
          <button className='reg-button' onClick={() => navigate('/register')}>Register</button>
        </form>
      </div>
    </div>
            </>
  );
}
export default SignupForm