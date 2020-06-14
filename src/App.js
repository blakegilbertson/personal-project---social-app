import React from 'react';
import Router from './routes/index';

import Navigation from './components/global/Navigation'
import Header from './components/global/Heading'

import postData from './data/postData'
// import userData from './data/userData'

// import getUserData from './services/getUsers'
import './stylesheets/css/App.css';

// https://github.com/DavidWells/react-router-tutorial

/*
  TODO
  - break js down into separate components 
  - break down css to components where possible
  - stop the randomisation of data - either use different data or grab on homepage load and then not each route render
  - move state to redux store
  - add airBnb guide
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
      postData: postData,
      commentData: null
    }
  }

  componentWillMount() {
    console.log('componentWillMount() running')
    fetch('https://randomuser.me/api/?results=5')
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ userData: { allUser: data.results } }))
      .catch(error => this.setState({ error, isLoading: false }))
    // TODO: look at this catch error further 
  }

  handleLikeClick = (e) => {
    const { id } = e.target
    const allPosts = this.state.postData
    const thisPost = allPosts[id]
    const numLikes = thisPost.interactions.likes
    const alreadyLiked = thisPost.interactions.liked
    const updatedLikes = alreadyLiked ? numLikes - 1 : numLikes + 1

    allPosts[id].interactions.likes = updatedLikes
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

  handleAddCommentClick = (e) => {
    console.log('Clicked to add comment');
    const { id } = e.target
    const allPosts = this.state.postData
    const comments = allPosts[id].interactions.comments.content

    console.log('comments: ', comments)

    // used to mock adding a comment - TODO: remove and use real data
    const newData = {
      postId: 867,
      user: 'Joanne',
      date: 'Wednesday 1st @ 3pm',
      heading: 'Some heading for new post',
      body: 'some new text for the post',
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
    }

    this.setState(prevState => ({
      postData: [...prevState.postData, newData]
    }))
  }

  // TODO: continue building, Non-functional
  handleCommentValue = (e) => {
    console.log('handleCommentValue()');

    const { id } = e.target

    console.log('id: ', id);
    
    this.setState(prevState => ({
      commentData: [...prevState.commentData, 'Some date by Blake'] //'Some date by Blake'
    }))
  }

  // TODO: continue building, Non-functional
  handleCommentPost = () => {
    console.log('handleCommentPost()');

    console.log('this.state: ', this.state);
  }


  render() {
    const userData = this.state.userData.allUser
    const postData = this.state.postData

    return (
      <div className="social-app theme-light">
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
          handleCommentValue={this.handleCommentValue}
          handleCommentPost={this.handleCommentPost}
          handleSeeCommentsClick={this.handleSeeCommentsClick}
        />
      </div>
    )
  }
}

export default App
