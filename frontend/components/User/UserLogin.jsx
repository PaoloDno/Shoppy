import React, { useState, useEffect } from "react";
import './user.css';

function UserLogin() {

  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [message, setMessage] = useState('');

  const handleLoginChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value });
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

  useEffect(() => {
    if(message !== ''){
      
      setTimeout(() => {
      
        setMessage('');
      
      }, 4000)
    }
  }, [message])

  return(
    <div className="Login">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
          <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
      <div id="message">{message}</div>
      
    </div>
  );
}

export default UserLogin;