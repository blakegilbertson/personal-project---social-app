import React from 'react'
import UserName from '../../global/UserName'

const Comment = (props) => {
  const { user, likes, comment } = props.comment
  return (
    <div className="comment">
      <UserName name={user} />
      <span className="comment-likes">{likes} likes</span>
      <div className="comment-body">{comment}</div>
      
    </div>
  )
}

export default Comment