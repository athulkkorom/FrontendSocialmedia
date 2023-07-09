import React, { useState } from 'react';
import './Login.css';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userName: userName,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:5000/login', data);
      const { token, user } = response.data; // Extract the token and user from the response

      // Save the token and user to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const moveToSignin = () => {
    navigate('/signup');
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
      <LoginPage moveToSignin={moveToSignin} setPassword={setPassword} setUserName={setUserName} onSubmit={onSubmit} />
    </div>
  );
}

function LoginPage({ moveToSignin, setPassword, setUserName, onSubmit }) {
  return (
    <div className="a-right">
      <form action=" " className="inform">
        <h3><b>Login</b></h3>
        <div>
          <input className='info' placeholder='User Name' onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <input type='password' className='info' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <span style={{ fontSize: "12px" }} onClick={moveToSignin}>Don't have an account?</span>
        </div>
        <button onClick={onSubmit} className='infobutton'>Login</button>
      </form>
    </div>
  );
}

export default Login;
