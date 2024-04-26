import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSignUp from '../components/User/UserSingUp.jsx';
import UserLogin from '../components/User/UserLogin.jsx';
import UserHome from './user.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHome />} /> 
        <Route path="/user/signin" element={<UserSignUp />} />
        <Route path="/user/login" element={<UserSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
