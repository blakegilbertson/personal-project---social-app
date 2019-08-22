import React from 'react'
import UserName from '../../user/UserName'
import DatePosted from '../DatePosted'

const Comment = (props) => {
  console.log('Comment props: ', props)
  const { user, likes, comment, datePosted } = props.comment
  return (
    <div className="comment">
      <UserName name={user} />
      |
      <DatePosted date={datePosted} />
      <span className="comment-likes">{likes} likes</span>
      <div className="comment-body">{comment}</div>
    </div>
  )
}

export default Comment