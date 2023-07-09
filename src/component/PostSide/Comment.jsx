import React, { useState } from 'react';
import './Comment.css';
import axios from 'axios';

function Comment() {
  const [commented, setCommented] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const post = JSON.parse(localStorage.getItem('post'));

  const handleComment = async () => {
    const data = {
      userName:user.userName,
      comments:commented
    }
    try{
      const response= await axios.post(`http://localhost:5000/comment/${post._id}`,data);
      const commentData = response.data
      console.log(commentData)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Comments</h1>
      {post.Comment.map((comment, index) => (
        <div key={index}>
          <span className='cmntuser'>{comment.userName}: </span>
          <span>{comment.comments}</span>
        </div>
      ))}
      <div className="commentbox">
        <input
          placeholder={`Type a Comment as ${user.userName}`}
          className="commentinput"
          onChange={(e) => setCommented(e.target.value)}
        ></input>
        <div className="commentbutton">
          <button onClick={handleComment}>comment</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
