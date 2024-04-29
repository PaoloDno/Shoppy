import React, { useState } from 'react';
import './App.css';

function UserHome() {
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1212/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1212/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };




  return (
    <div className="App">
      <h1>User Authentication</h1>
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignupSubmit}>
          <input type="text" name="username" placeholder="Username" value={signupData.username} onChange={handleSignupChange} required />
          <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
          <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
          <button type="submit">Signup</button>
        </form>
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
          <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
          <button type="submit">Login</button>
        </form>
      </div>

      
    </div>
  );
}

export default UserHome;
