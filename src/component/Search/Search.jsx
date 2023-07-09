import React, { useEffect, useState } from 'react'
import './search.css'
import axios from 'axios'
import heart from '../../img/like.png'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
function Search() {
  const search = JSON.parse(localStorage.getItem('search'))
  const[posts,setPosts] = useState([])
  useEffect(()=>{
   const fetchPost = async ()=>{
    try{
    const response = await axios.get(`http://localhost:5000/posts/${search.userName}`)
    const postData =response.data
    setPosts(postData)
    }catch(error){
      console.log(error)
    }
   }
   fetchPost()
  },[])
  return (
    <div className='search1'>
      <div className='profilecard'>
        <div className='profileimage1'>
        <img
  src={`http://localhost:5000/${search.coverImg}`}
  alt="No Photo"
/>
<img
  src={`http://localhost:5000/${search.profileImg}`}
  alt="No Photo"
/>

        </div>
        <div className='profilename'>
            <span>{search.firstName}</span>
            <span>{search.bio}</span>
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
        <span>Follow</span>
    </div>
    <h1>My Post</h1>
    <div className="posts2">
    {posts.map((post) => (
      <div className="post2" key={post.id}>
        <img src={`http://localhost:5000/${post.image}`} alt="" className='postImage2' />
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
    </div>

  )
}

export default Search