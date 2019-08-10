import React from 'react'
import Header from '../../global/Heading'
import UserName from '../../global/UserName'
import Comment from '../Comment'

const Post = (props) => {
  const { post } = props

  const user = post.user
  const interactions = post.interactions
  const liked = interactions.liked
  const comments = interactions.comments.content

  return (
    <div className="post">
      <div className="post-details">
        <UserName name={user} />
        <span className="posted-on">Saturday 28th @ 5pm</span>
      </div>

      <div className="post-content">
        <Header type="2" text={post.heading} />
        <p>{post.body}</p>
      </div>

      <div className="post-interactions">
        {/* TODO: make this clickable to like/dislike */ }
        <div className="num-likes">
          {interactions.likes} likes
        </div>
        {/* TODO: make this clickable to show comments */ }
        <div className="num-comments"> 
          {interactions.comments.total} comments
        </div>
      </div>

      {/* TODO: get like/comment func to update state */}
      <div className="post-btns">
        <button onClick={props.handleLikeClick}>
          {
            liked ? 'Liked' : 'Like'
          }
        </button>
        {/* TODO: make this clickable comment */ }
        <button onClick={props.handleCommentClick}>Comment</button>
      </div>

      <div className="post-comments">
        {
          comments &&
          comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />
          })
        }
      </div>
    </div>
  )
}

export default Post