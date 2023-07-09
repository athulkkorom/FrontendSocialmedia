import React, { useEffect, useRef, useState } from 'react';
import './PostShare.css';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import axios from 'axios';

function PostShare() {
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [describtion, setDescribtion] = useState(null);

  const [profileImage, setProfileImage] = useState(null);
  const imgRef = useRef();
  const user = JSON.parse(localStorage.getItem('user'));

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImg({
        image: URL.createObjectURL(img),
      });
      setImage(img);
    }
  };

  const handlePost = async (e) => {
    try {
      const formData = new FormData();
      formData.append('describtion', describtion);
      formData.append('image', image);
      formData.append('userName', user.userName);
      console.log(formData)

      await axios.post('http://localhost:5000/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Image uploaded successfully
      console.log('Post uploaded successfully');
    } catch (error) {
      // Handle error
      console.error('Error uploading cover image', error);
    }
  };

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bio/${user.userName}`);
        const { profileImg } = response.data;
        setProfileImage(`http://localhost:5000/${profileImg}`); // Construct the image URL with server URL
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchBio();

    return () => {
      // Cleanup function
    };
  }, []);

  return (
    <div className="PostShare">
      <img src={profileImage} alt="" />
      <div>
        <input type="text" placeholder="What is happening" />
        <div className="postoption">
          <div className="options" style={{ color: '#4CB256' }} onClick={() => imgRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="options" style={{ color: '#4A4EB7' }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="options" style={{ color: 'EF5757' }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="options" style={{ color: '#E1AE4A' }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="share">Share</button>
          <div style={{ display: 'none' }}>
            <input type="file" name="My File" ref={imgRef} onChange={onImageChange} />
          </div>
        </div>
        {img && (
          <div className="previewimage">
            <UilTimes onClick={() => setImg(null)} />
            <img src={img.image} alt="" />
            <input placeholder="Type Something" onChange={(e) => setDescribtion(e.target.value)}></input>
            <button onClick={handlePost}>Share Post</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
