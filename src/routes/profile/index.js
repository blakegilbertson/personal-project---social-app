import React from 'react';
// import userData from '../../data/userData'
// console.log('userData: ', userData);
import myData from './my-profile.json'
import Post from '../../components/posts/Post'

const UserImage = (props) => {
  const { imgUrl, imgClass, imgAlt } = props

  return (
    <div className="profile-image">
      <img src={imgUrl} className={imgClass} alt={imgAlt} />
    </div>
  )
}

const LoadingUsers = () => {
  return (
    <div>LOADING USER PROFILE, PLEASE WAIT...</div>
  )
}

class ProfileRoute extends React.Component {
  constructor(props) {
    console.log('<ProfileRoute /> props: ', props);

    super(props)
    this.state = {
      pageView: {
        aboutUser: false,
        postsUser: true,
        msgUser: false,
        addUser: false
      },
      postData: props.postData,
      userData: myData
    }

    this.handlePostsClick = this.handlePostsClick.bind(this)
    this.handleAboutClick = this.handleAboutClick.bind(this)
    this.handleMsgClick = this.handleMsgClick.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  handlePostsClick() {
    console.log('Clicked handlePostsClick()');
    this.setState({
      pageView: {
        aboutUser: false,
        postsUser: true,
        msgUser: false,
        addUser: false
      }
    })
  }

  handleAboutClick() {
    console.log('Clicked handleAboutClick()');
    this.setState({
      pageView: {
        aboutUser: true,
        postsUser: false,
        msgUser: false,
        addUser: false
      }
    })
  }

  handleMsgClick() {
    console.log('Clicked handleMsgClick()');
    this.setState({
      pageView: {
        aboutUser: false,
        postsUser: false,
        msgUser: true,
        addUser: false
      }
    })
  }

  handleAddClick() {
    console.log('Clicked handleAddClick()');
    this.setState({
      pageView: {
        aboutUser: false,
        postsUser: false,
        msgUser: false,
        addUser: true
      }
    })
  }

  render() {
    const pageCSS = 'profile'
    const state = this.state
    const pageViewState = state.pageView
    const postDataState = state.postData
    const userData = state.userData
    
    console.log('render() pageViewState: ', pageViewState);
    console.log('render() postDataState: ', postDataState);
    console.log('render() userData: ', userData);

    const {
      id: {
        value: userId
      },
      name: {
        username
      },
      picture: { 
        cover: coverImg,
        large: largeUserImg,
        medium: mediumUserImg,
        thumbnail: thumbnailUserImg
      },
      profile: {
        about: aboutText,
        interests: listOfInterests,
        roles: listOfRoles
      }
    } = userData



    return (
      <div className={`${pageCSS}-route`}>
        <div className={`${pageCSS}-cover`}>
          <h2 className={`${pageCSS}-username`}>{username}</h2>
          <img className={`${pageCSS}-cover-img`} src={coverImg} alt={`${username}'s profile cover`} />

          {
            largeUserImg && 
            <UserImage imgUrl={largeUserImg} imgClass={`${pageCSS}-avatar`} imgAlt={`${username}'s profile cover`} />
          }
        </div>

        <nav className="profile-nav">
          <ul>
            <li>
              <button
                onClick={this.handlePostsClick}
                className={pageViewState.postsUser ? 'profile-nav-link--active' : 'profile-nav-link--inactive'}
              >
                Posts
              </button>
            </li>
            <li><button
                  onClick={this.handleAboutClick}
                  className={pageViewState.aboutUser ? 'profile-nav-link--active' : 'profile-nav-link--inactive'}
                >
                  About
                </button>
            </li>
            <li>
              <button
                onClick={this.handleMsgClick}
                className={pageViewState.msgUser ? 'profile-nav-link--active' : 'profile-nav-link--inactive'}
              >
                Msg
              </button>
            </li>
            <li>
              <button
                onClick={this.handleAddClick}
                className={pageViewState.addUser ? 'profile-nav-link--active' : 'profile-nav-link--inactive'}
              >
                Add
              </button>
            </li>
          </ul>
        </nav>

        {
          pageViewState.aboutUser ? 
          <section id="profile-about" className="profile-about">
            {
              !userData ?
              <LoadingUsers /> :
              <div>
                <div className="basic-info">
                  {
                    listOfRoles && 
                    <div className="roles">
                      <h2 className="roles-heading">Roles</h2>
                      <ul className="roles-list">
                        {
                          listOfRoles.map(i => {
                            return <li key={i}>{i}</li>
                          })
                        }
                      </ul>
                    </div>
                  }

                  {
                    aboutText && 
                    <section className="about-section">
                      <h2 className="about-heading">About Me</h2>
                      <div className="about-content">{aboutText}</div>
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
          </section>
          : null
        }
        
        {
          pageViewState.postsUser ? 
          <section id="profile-posts" className="profile-posts">
            {
              postDataState &&
              postDataState.map((post, i) => {
                return <Post
                  i={i}
                  key={post.postId}
                  post={post}
                  handleLikeClick={this.props.handleLikeClick}
                  handleOpenCommentClick={this.props.handleOpenCommentClick}
                  handleAddCommentClick={this.props.handleAddCommentClick}
                  handleSeeCommentsClick={this.props.handleSeeCommentsClick}
                />
              })
            }
          </section>
          : null
        }

        {
          pageViewState.msgUser ?
          <section id="profile-msg-user" className="profile-msg-user">
            MSG USER
          </section>
          : null
        }
      </div>
    )
  }
};

export default ProfileRoute;
