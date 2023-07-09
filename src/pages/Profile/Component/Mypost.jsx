import React, { useEffect, useState } from 'react';
import './Mypost.css'
import axios from 'axios';
import heart from '../../../img/like.png'
import comment from '../../../img/comment.png'
import share from '../../../img/share.png'
function Mypost() {
  const user = JSON.parse(localStorage.getItem('user'));
  const[posts,setPosts] = useState([])
  useEffect(()=>{
   const fetchPost = async ()=>{
    try{
    const response = await axios.get(`http://localhost:5000/posts/${user.userName}`)
    const postData =response.data
    setPosts(postData)
    }catch(error){
      console.log(error)
    }
   }
   fetchPost()
  },[])

  return (
    <div className="posts">
      <h1>My Post</h1>
    {posts.map((post) => (
      <div className="post" key={post.id}>
        <img src={`http://localhost:5000/${post.image}`} alt="" className='postImage1' />
        <div className="postReact">
          <img src={heart} alt="" />
          <img src={comment} alt="" />
          <img src={share} alt="" />
        </div>
        {/* <span>{post.like} Likes</span> */}
        <div className="details">
          <span><b>{post.userName}</b></span>
          <span> {post.describtion}</span>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Mypost;
