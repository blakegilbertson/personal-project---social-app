import React from 'react';
// import userData from '../../data/userData'
// console.log('userData: ', userData);
import myData from './my-profile.json'
import Post from '../../components/posts/Post'

const UserImage = (props) => {
  const { imgUrl } = props

  console.log(imgUrl);
  return (
    <div className="profile-image">
      <img src={imgUrl} alt="user" />
    </div>
  )
}

const LoadingUsers = () => {
  return (
    <div>LOADING USERS, PLEASE WAIT...</div>
  )
}

const ProfileRoute = (props) => {
  console.log('ProfileRoute props: ', props);

  const { postData } = props

  const userData = myData
  const {name, picture, profile} = userData
  const {username} = name
  const {cover: coverImg, large: largeUserImg} = picture
  const {about, interests: listOfInterests} = profile 

  console.log('ProfileRoute userData: ', userData);

  console.log('listOfInterests: ', listOfInterests);

  return (
    <div className="profile-route">
      <div className="profile-cover">
        <h2 className="profile-username">{username}</h2>
        <img className="profile-cover-img" src={coverImg} alt="" />

        {
          largeUserImg && 
          <UserImage imgUrl={largeUserImg} />
        }
      </div>

      <nav className="profile-nav">
        <ul>
          <li><a href="#posts?id=666">Posts</a></li>
          <li><a href="#about?id=666">About</a></li>
          <li><a href="#msg?id=666">Msg</a></li>
          <li><a href="#add?id=666">Add</a></li>
        </ul>
      </nav>
      
      {
        !userData ?
        <LoadingUsers /> :
        <div>
          <div className="basic-info">
            {
              about && 
              <section className="about-section">
                <h2 className="about-heading">About Me</h2>
                <div className="about-content">{about}</div>
              </section>
            }

            {
              listOfInterests && 
              <div className="interests">
                <h2 className="interests-heading">Interests</h2>
                <ul className="interests-list">
                  {
                    listOfInterests.map(i => {
                      return <li key={i}>{i}</li>
                    })
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      }

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

export default ProfileRoute;
