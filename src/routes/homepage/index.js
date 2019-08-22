import React from 'react';
import Post from '../../components/posts/Post'

const HomepageRoute = (props) => {
  const { postData } = props

  return (
    <div className="homepage-route">
      <section className="posts">

        {
          postData &&
          postData.map((post, i) => {
            return <Post
              i={i}
              key={post.postId}
              post={post}
              handleLikeClick={props.handleLikeClick}
              handleOpenCommentClick={props.handleOpenCommentClick}
              handleAddCommentClick={props.handleAddCommentClick}
              handleSeeCommentsClick={props.handleSeeCommentsClick}
            />
          })
        }
      </section>
    </div>
  )
}

export default HomepageRoute;
