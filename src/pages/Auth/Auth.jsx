import React, { useState } from 'react';
import './Auth.css';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Auth() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const moveToLogin = () => {
    navigate('/login');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password
    };

    axios.post(`http://localhost:5000/signup`, data)
      .then(response => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="auth">
      <div className="a-class">
        <img src={logo} alt="" />
        <div className="webmame">
          <h1 style={{ color: "#fca61f" }}><b>Social Media</b></h1>
          <h6>Explore the world</h6>
        </div>
      </div>
      <Signup moveToLogin={moveToLogin} onSubmit={onSubmit} setfirstName={setfirstName} setlastName={setlastName} setUserName={setUserName} setPassword={setPassword} setConfirmPassword={setConfirmPassword} />
    </div>
  );
}

function Signup({ moveToLogin, onSubmit, setfirstName, setlastName, setUserName, setPassword, setConfirmPassword }) {
  return (
    <div className="a-right">
      <form action=" " className="inform">
        <h3><b>Sign Up</b></h3>
        <div>
          <input type='text' className='info' placeholder='First Name' onChange={(e) => setfirstName(e.target.value)} />
          <input type='text' className='info' placeholder='Last Name' onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div>
          <input className='info' placeholder='User Name' onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <input type='password' className='info' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <input type='password' className='info' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div>
          <span style={{ fontSize: "12px" }} onClick={moveToLogin}>Already have an account?</span>
        </div>
        <button onClick={onSubmit} className='infobutton'>Signup</button>
      </form>
    </div>
  );
}

export default Auth;
