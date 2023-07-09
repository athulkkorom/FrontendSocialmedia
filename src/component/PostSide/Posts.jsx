import React, { useEffect, useState } from 'react';
import './Posts.css';
import share from "../../img/share.png";
import heart from "../../img/like.png";
import notlike from "../../img/notlike.png";
import comment from "../../img/comment.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import src from 'debug';
function Posts() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts');
      const postData = response.data;
      setPosts(postData);
      console.log(setPosts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    fetchPosts();
  }, []);

  const handleLike = async (id) => {
    
    try {
    const response = await axios.post(`http://localhost:5000/like/${id}`,{userName:user.userName})
      const data = await response.data
      if(data.message){
        fetchPosts()
      }
    } catch (error) {
      // console.log(error);
    }
  }
  const handleComment = async (id) =>{
    try{
     const response= await axios.get(`http://localhost:5000/comment/${id}`);
     const postDetails = response.data
     localStorage.setItem('post', JSON.stringify(postDetails));
      navigate('/comment')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post._id}>
          <img src={`http://localhost:5000/${post.image}`} alt="" className="postImage" />
          <div className="postReact">
            <img
              onClick={() => {
                handleLike(post._id);
              }}
              src={post.Liked.includes(user.userName) ? heart : notlike}
              alt=""
            />
            <img  onClick={() => {
                handleComment(post._id);
              }}
               src={comment} alt="" />
            <img src={share} alt="" />
          </div>
          <div className="likes">
            <span>{post.Like} likes</span>
          </div>
          <div className="details">
            <span>
              <b>{post.userName}</b>
            </span>
            <span> {post.describtion}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
