import React from 'react';

const Post = (props) => {
  console.log(props);
  // const { post, user } = props
  // const { heading, text } = post

  return (
    <div className="post">
      <div className="post-content">
        <h2>{props.post.heading}</h2>
        <p>{props.post.text}</p>
      </div>
      <div className="post-details">
        <p className="users-name">{props.user}</p>
      </div>
      <div className="post-btns">
        <button>Like</button>
        <button>Comment</button>
      </div>
    </div>
  )
}

const HomepageRoute = () => {
  const post = {
    heading: 'Some heading for this post',
    text: 'Some text for this post'
  }
  return (
    <div className="homepage-route">
      SOME HOMEPAGE CONTENT

      <section className="posts">
        <Post post={post} user="Dave Williams" />
        <Post post={post} user="Sally Jones" />
        <Post post={post} user="Barry Barrison" />
      </section>
    </div>
  )
}

export default HomepageRoute;
