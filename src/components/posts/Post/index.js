import React from 'react'
import Header from '../../global/Heading'
import Button from '../../global/Button'
import Link from '../../global/Link'
import UserName from '../../user/UserName'
import DatePosted from '../DatePosted'
import Comment from '../Comment'

const Post = props => {
  console.log('Post props: ', props)
  const {
    i,
    post,
    handleLikeClick,
    handleOpenCommentClick,
    handleAddCommentClick,
    handleCommentValue,
    handleCommentPost,
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

  //console.log('postId: ', postId);

  // const handleCommentValue = () => {
  //   console.log('handleCommentValue()');

  //   this.setState({value: event.target.value});
  // }

  // const handleCommentChange = (e) => {
  //   console.log('handleCommentChange(): ', e);

  //   console.log('this.state: ', this.state);

  //   // onBlur
  //   // get postId
  //   // get comment text
  //   // setState and add new comment

  //   // this.setState({
  //   //   commentData: ''
  //   // })    
  // }

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
              <Link href='/' onClick={handleSeeCommentsClick} id={i} text={`${numComments} comments`} /> :
              <span>{numComments} comments</span>
          }
        </div>
      </div>

      <div className="post-btns">
        <Button id={i} className="post-like-btn" onClick={handleLikeClick} text={liked ? 'Liked' : 'Like'} />

        <Button id={i} className="post-open-comment-btn" onClick={handleOpenCommentClick} text={displayAddComment ? 'Cancel comment' : 'Comment'} />
      </div>

      {
        displayAddComment &&
        <div className="write-comment">
          <textarea id="write-comment-textarea" type="text" value={handleCommentValue} onBlur={handleCommentPost} />

          <Button id={i} data-postId={postId} className="post-submit-comment-btn" onClick={handleAddCommentClick} text="Post" />
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