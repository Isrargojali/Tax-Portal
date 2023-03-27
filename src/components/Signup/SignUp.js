import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";

function App() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="app">
      <div className="login-form">
        <div className="title">Welcome to taxSlayer  Portal</div>
        <div className="form-email">
      <form>
        <div className="input-container">
          <label>Email</label>
          <input className="input_text" type="email"  placeholder="email" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input className="input_text" type="password" placeholder="Password"  />
        </div>
        <div className="button-container">
          <button className="id_btn" onClick={() => navigate('/dash')}>LOG IN</button>
          <button className="reg_btn" onClick={() => navigate('/register')}>Register</button>
        </div>
      </form>
    </div>
      </div>
    </div>
    </>
  );}

export default App;