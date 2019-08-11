import React from 'react';
import Router from './routes/index';

import Navigation from './components/global/Navigation'
import Header from './components/global/Heading'

// import getUserData from './services/getUsers'
import './stylesheets/css/App.css';

// https://github.com/DavidWells/react-router-tutorial

/*
  TODO
  - break js down into separate components 
  - break down css to components where possible
  - stop the randomisation of data - either use different data or grab on homepage load and then not each route render
  - move state to redux store
*/




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {
        myData: {
          name: 'Blake Gilbertson'
        },
        allUser: null
      },
      error: null,
      postData: [
        {
          postId: 567,
          user: 'Dave',
          date: 'Saturday 28th @ 5pm',
          heading: 'Some heading for post',
          body: 'some text for the post',
          img: null,
          interactions: {
            likes: 23,
            liked: false,
            comments: {
              total: 3,
              content: [
                {
                  id: 334,
                  user: 'Sally',
                  comment: 'I love this',
                  likes: 2,
                  datePosted: '30 minutes ago'
                },
                {
                  id: 335,
                  user: 'Dave',
                  comment: 'Thanks Sal',
                  likes: 1,
                  datePosted: '2 hours ago'
                },
                {
                  id: 336,
                  user: 'John',
                  comment: 'This is great',
                  likes: 2, 
                  datePosted: '8 days ago'
                }
              ],
              displayComments: false,
              displayAddComment: false,
            }
          }
        },
        {
          postId: 678,
          user: 'Jane',
          date: 'Wednesday 1st @ 3pm',
          heading: 'Some heading for post',
          body: 'some text for the post',
          img: 'https://www.visitkohrong.com/wp-content/uploads/2017/05/Sunset-on-Long-Beach-Koh-Rong-Island-in-Cambodia-4.jpg',
          interactions: {
            likes: 7,
            liked: true,
            comments: {
              total: 1,
              content: [
                {
                  id: 678,
                  user: 'Sally',
                  comment: 'I love this',
                  likes: 2,
                  datePosted: '10 minutes ago'
                }
              ],
              displayComments: false,
              displayAddComment: false,
            }
          }
        },
        {
          postId: 345,
          user: 'Becky',
          date: 'Thurday 12th @ 11am',
          heading: 'Some heading for post',
          body: 'some text for the post',
          img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
          interactions: {
            likes: 4,
            liked: false,
            comments: {
              total: 0,
              content: null,
              displayComments: false,
              displayAddComment: false,
            }
          }
        }
      ]
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ userData: { allUser: data.results } }))
      .catch(error => this.setState({ error, isLoading: false }))
    // TODO look at this catch error further 
  }

  handleLikeClick = (e) => {
    const { id } = e.target
    const allPosts = this.state.postData
    const thisPost = allPosts[id]
    const numLikes = thisPost.interactions.likes
    const alreadyLiked = thisPost.interactions.liked
    const udatedLikes = alreadyLiked ? numLikes - 1 : numLikes + 1

    allPosts[id].interactions.likes = udatedLikes
    allPosts[id].interactions.liked = !alreadyLiked

    this.setState({
      postData: allPosts
    })
  }

  handleSeeCommentsClick = (e) => {
    e.preventDefault()
    console.log('Clicked see comments');
    const { id } = e.target
    const allPosts = this.state.postData
    const displayComments = allPosts[id].interactions.comments.displayComments

    allPosts[id].interactions.comments.displayComments = !displayComments

    this.setState({
      postData: allPosts
    })
  }

  handleOpenCommentClick = (e) => {
    console.log('Clicked to open add comment section');
    const { id } = e.target
    const allPosts = this.state.postData
    const displayAddComment = allPosts[id].interactions.comments.displayAddComment

    allPosts[id].interactions.comments.displayAddComment = !displayAddComment

    this.setState({ postData: allPosts })
  }

  handleAddCommentClick = () => {
    console.log('Clicked to add comment');
    // const { id } = e.target

    // TODO: display add comment
  }

  render() {
    const userData = this.state.userData.allUser
    const postData = this.state.postData
    return (
      <div className="social-app">
        <header className="site-header">
          <Header type="1" text="Social App" />
          <Navigation />
        </header>

        <Router
          userData={userData}
          postData={postData}
          handleLikeClick={this.handleLikeClick}
          handleOpenCommentClick={this.handleOpenCommentClick}
          handleAddCommentClick={this.handleAddCommentClick}
          handleSeeCommentsClick={this.handleSeeCommentsClick}
        />
      </div>
    )
  }
}

export default App
