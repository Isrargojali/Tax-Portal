import React, { useState } from 'react';
import './Ticket.css';
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // add submit logic here

  };

  return (
    <>
    <div className='main_section'>
   <button className='form-button' onClick={() => navigate('/signup')}>Back</button>
    <form className="form" onSubmit={handleSubmit}>
      <div className='first_form'>
      <div className="register-form">
        <label htmlFor="firstName">First Name</label>
        <input
        className='text_area'
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="register-form">
        <label htmlFor="firstName">Middle Name</label>
        <input
         className='text_area'
         type="text"
         id="middleName"
          name="middleName"
          value={middleName}
          onChange={(event) => setMiddleName(event.target.value)}
          />
      </div>
      <div className="register-form">
        <label htmlFor="firstName">Last Name</label>
        <input
         className='text_area'
          type="text"
          id="lastName"
          name="lastName"
          value={LastName}
          onChange={(event) => setLastName(event.target.value)}
          />
      </div>
      </div>
      <div className='sec_group'>
      <div className="register-form">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
        className='sec_text'
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          />
      </div>
      <div className="register-form">
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
         className='sec_text'
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
        />
      </div>
      </div>
      <div className='third_group'>
      <div className="register-form">
        <label htmlFor="email">Enter Email</label>
        <input
        className='third_text'
        type="email"
        id="email"
        name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="register-form">
        <label htmlFor="confirmEmail">Confirm Your Email</label>
        <input
           className='third_text'
           type="email"
          id="confirmEmail"
          name="confirmEmail"
          value={confirmEmail}
          onChange={(event) => setConfirmEmail(event.target.value)}
          />
      </div>
      </div>
      <div className='fourth_group'>
      <div className="register-form">
        <label htmlFor="password">Create Password</label>
        <input
        className='fourth_text'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div className="register-form">
        <label htmlFor="createPassword">Confirm Password</label>
        <input
         className='fourth_text'
          type="password"
          id="createPassword"
          name="createPassword"
          value={createPassword}
          onChange={(event) => setCreatePassword(event.target.value)}
        />
      </div>
      </div>
      <button type="submit" className='submit_button'>SUBMIT</button>
    </form>
    </div>
         </>
  );
}

export default Form;
