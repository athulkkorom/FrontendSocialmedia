import React, { useEffect, useState } from 'react'
import './ProfileCard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nophoto from '../../img/download.png'
function ProfileCard() {
  const navigate = useNavigate( )
  const [bio, setBio] = useState('');
  const [name, setNmae] = useState('');
  const [image, setImage] = useState('');
  const [cover, setCover] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bio/${user.userName}`);
        const { bio,firstName,profileImg,coverImg } = response.data;
        setBio(bio);
        setNmae(firstName)
        setImage(`http://localhost:5000/${profileImg}`); // Construct the image URL with server URL
        setCover(`http://localhost:5000/${coverImg}`); // Construct the image URL with server URL
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchBio();
  });
  const profile = ()=>{
    navigate('/profile')
  }
  return (
    <div className='profilecard'>
        <div className='profileimage'>
        <img
  src={cover || Nophoto}
  alt="No Photo"
/>
<img
  src={image || Nophoto}
  alt="No Photo"
/>

        </div>
        <div className='profilename'>
            <span>{name}</span>
            <span>{bio}</span>
        </div>
        <div className='followstatus'>
          <hr />
          <div>
          <div className="follow">
            <span>5000</span>
            <span>following</span>
          </div>
          <div className="vl">
            <div className="follow">
              <span>1000</span>
              <span>followers</span>
            </div>
          </div>
          </div>
          <hr />
        </div>
        <span onClick={profile}>My Profile</span>
    </div>
  )
}

export default ProfileCard