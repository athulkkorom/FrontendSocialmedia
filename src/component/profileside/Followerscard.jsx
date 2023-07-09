import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Followerscard.css';

function Followerscard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        const usersData = response.data;
        setUsers(usersData);
        console.log(usersData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="followerscard">
      <h3>Who is Following You</h3>
      {users.map((follower) => (
        <div className="follower" key={follower.id}>
          <img
            src={`http://localhost:5000/${follower.profileImg}`}
            alt=""
            style={{ borderRadius: '50%', height: '5rem', width: '5rem' }}
          />
          <div className="name">
            <span>{follower.firstName}</span>
            <span>@{follower.userName}</span>
          </div>
          <button>Follow</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Followerscard;