import React, { useState, useEffect } from "react";
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
    
    if (signUpData.username === '' || signUpData.email === '') {
      setMessage("username or email cannot be empty");
      return;
    }
    if (signUpData.password === '' || signUpData.password.length < 7 ) {
      setMessage("passwrod cant be empty or less than 7 characters");
      return;
    }

    try {

      const response = await fetch('http://localhost:1212/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });
      const data = await response.json();
      setMessage(data.message); 

    } catch (error) {
      console.error('Error:', error );
      setMessage('An error occurred. Please try again.');
    }
  }

  useEffect(() => {
    if(message !== ''){
      
      setTimeout(() => {
      
        setMessage('');
      
      }, 4000)
    }
  }, [message])

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