import React from 'react';
import Post from '../../components/posts/Post'



const HomepageRoute = (props) => {
  const { postData } = props
  console.log('HomepageRoute postData: ', postData);

  return (
    <div className="homepage-route">
      <section className="posts">

        {
          postData.map(post => {
            // console.log('mapping users: ', user);
            return <Post key={post.id} post={post} handleLikeClick={props.handleLikeClick} handleCommentClick={props.handleCommentClick} />
          })
        }

        {/* <Post post={post} user="Dave Williams" />
        <Post post={post} user="Sally Jones" />
        <Post post={post} user="Barry Barrison" /> */}
      </section>
    </div>
  )
}

export default HomepageRoute;
