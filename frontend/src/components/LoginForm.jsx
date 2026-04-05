import React, { useState } from 'react';
import '../App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", { email, password });
    alert("Login attempt successful!");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Please enter your details</p>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="example@mail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="********" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Sign In</button>
        
        <div className="form-footer">
          <span>Don't have an account? <a href="#">Sign up</a></span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;