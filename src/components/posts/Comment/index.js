import React from 'react'
import UserName from '../../user/UserName'
import DatePosted from '../DatePosted'
import Link from '../../global/Link'

const Comment = props => {
  console.log('Comment props: ', props)
  const { user, likes, comment, datePosted } = props.comment

  return (
    <div className="comment">
      {/* <Link href={`/profile?user=${user.login.username}`}> */}
        <UserName name={user} />
      {/* </Link> */}
      |
      <DatePosted date={datePosted} />
      <span className="comment-likes">{likes} likes</span>
      <div className="comment-body">{comment}</div>
    </div>
  )
}

export default Comment