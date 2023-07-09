import React, { useState } from 'react';
import './Bioedit.css';
import axios from 'axios';

function Bioedit() {
  const [bio, setBio] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.put('http://localhost:5000/bio', {
        userName: user.userName,
        bio: bio,
      });

      window.history.back(); // Navigate back to the previous page
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="bioedit">
      <h1>Bio Edit</h1>
      <input className="typebio" placeholder="Type Your bio" onChange={(e) => setBio(e.target.value)} />
      <div className="biobutton">
        <button onClick={onSubmit} className="biosub">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Bioedit;
