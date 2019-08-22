import React from 'react'
import Header from '../../global/Heading'
import UserName from '../../user/UserName'
import DatePosted from '../DatePosted'
import Comment from '../Comment'

const Post = (props) => {
  console.log('Post props: ', props)
  const {
    i,
    post,
    handleLikeClick,
    handleOpenCommentClick,
    handleAddCommentClick,
    handleSeeCommentsClick
  } = props

  const {
    postId,
    user,
    date,
    heading,
    body,
    img,
    interactions
  } = post


  const {
    likes,
    liked,
  } = interactions

  const commentsObj = interactions.comments
  const numComments = commentsObj.total
  const comments = commentsObj.content
  const displayComments = commentsObj.displayComments
  const displayAddComment = commentsObj.displayAddComment

  return (
    <div className="post" data-postid={postId}>
      <div className="post-details">
        <UserName name={user} />
        <DatePosted date={date} />
      </div>

      <div className="post-content">
        {img && <img className="post-img" src={img} alt="some pic" />}
        <Header type="2" text={heading} />
        <div className="post-body">{body}</div>
      </div>

      <div className="post-interactions">
        <div className="num-likes">
          {likes} likes
        </div>
        <div className="num-comments">
          {
            numComments > 0 ?
              <a href="/" onClick={handleSeeCommentsClick} id={i}>{numComments} comments</a> :
              <span>{numComments} comments</span>
          }
        </div>
      </div>

      <div className="post-btns">
        <button onClick={handleLikeClick} id={i}>
          {liked ? 'Liked' : 'Like'}
        </button>
        {/* TODO: make this clickable to comment */}
        <button className="comment" onClick={handleOpenCommentClick} id={i}>Comment</button>
      </div>

      {
        displayAddComment &&
        <div className="write-comment">
          <textarea type="text" />
          <button className="post-comment" onClick={handleAddCommentClick} id={i}>Post</button>
        </div>        
      }

      {
        comments &&
        displayComments &&
        <div className="post-comments">
          {
            comments.map(comment => {
              return <Comment key={comment.id} comment={comment} />
            })
          }
        </div>
      }
    </div>
  )
}

export default Post