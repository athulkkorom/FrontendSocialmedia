import React, { useEffect, useRef, useState } from 'react';
import './MiddleSide.css';
import edit from '../../../img/edit.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoPhoto from '../../../img/download.png'
function MiddleSide({ userName }) {
  const imgRef =useRef()
  const coverRef = useRef()
  const navigate = useNavigate();
  const [bio, setBio] = useState('');
  const [name, setNmae] = useState('');
  const [image, setImage] = useState('');
  const [cover, setCover] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const handleImageChange = async (event) => {
    console.log(event.target.files)
    try {
      const formData = new FormData();
      formData.append('profileImage', event.target.files[0]);
      formData.append('userName', user.userName);

      await axios.put('http://localhost:5000/uploadProfileImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Image uploaded successfully
      console.log('Profile image uploaded successfully');
    } catch (error) {
      // Handle error
      console.error('Error uploading profile image', error);
    }
  };
  const handleCoverChange = async (event) => {
    console.log(event.target.files)
    try {
      const formData = new FormData();
      formData.append('coverImage', event.target.files[0]);
      formData.append('userName', user.userName);

      await axios.put('http://localhost:5000/uploadCoverImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Image uploaded successfully
      console.log('cover image uploaded successfully');
    } catch (error) {
      // Handle error
      console.error('Error uploading cover image', error);
    }
  };

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
  },[user]);

  const bioEdit = () => {
    navigate('/bioedit');
  };

  return (
    <div className="middle">
        <div className="profileimage">
        <img
  src={cover || NoPhoto}
  alt="No Photo"
  onClick={() => {
    coverRef.current.click();
  }}
/>
<img
  src={image || NoPhoto}
  alt="No Photo"
  onClick={() => {
    imgRef.current.click();
  }}
/>
    </div>
      <div className='profilename'>
        <span>{name}</span>
        <span>
          {bio} <img onClick={bioEdit} className='editimg' src={edit} alt="" />
        </span>
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
      <div style={{display:"none"}}>
      <input type="file" name="profileImage" onChange={handleImageChange} ref={imgRef} />
    </div>
    <div style={{display:"none"}}>
      <input type="file" name="coverImage" onChange={handleCoverChange} ref={coverRef} />
    </div>
    </div>
  );
}

export default MiddleSide;
