import React from 'react'
import './PostSide.css'
import PostShare from './PostShare'
import Posts from './Posts'
function PostSide() {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  )
}

export default PostSide