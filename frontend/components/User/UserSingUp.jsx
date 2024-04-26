import React, { useState } from "react";
import './user.css';


function UserSignUp() {

  const [ signUpData, setSignupData ] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleSignUpChange = (e) => {
    setSignupData({
      ...signUpData, [e.target.name]: e.target.value
    });
  }
  const handleSignUpSubmit = async (e) => {
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

    } catch {
      console.error('Error:', error )
    }
  }

  return(
    <div className="Signup">
      <h1>User Authentication</h1>
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input type="text" name="username" placeholder="Username" value={signUpData.username} onChange={handleSignUpChange} required />
          <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} required />
          <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} required />
          <button type="submit">Signup</button>
        </form>
      </div>
      <div id="message">{message}</div>
    </div>  
  );

}



export default UserSignUp;