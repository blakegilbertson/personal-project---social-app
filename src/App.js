import React from 'react';
import Router from './routes/index';

import Navigation from './components/global/Navigation'
import Header from './components/global/Heading'

// import getUserData from './services/getUsers'
import './stylesheets/css/App.css';

// https://github.com/DavidWells/react-router-tutorial

/*
  Things I've noticed to change: 
  - break js down into separate components 
  - break down css to components where possible
  - stop the randomisation of data - either use different data or grab on homepage load and then not each route render
  - move state to redux store
*/




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
      error: null,
      postData: [
        {
          id: 567,
          user: 'Dave',
          heading: 'Some heading for post',
          body: 'some text for the post',
          img: 'some-url-for-pic',
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
                  likes: 2
                },
                {
                  id: 335,
                  user: 'Dave',
                  comment: 'Thanks Sal',
                  likes: 1
                },
                {
                  id: 336,
                  user: 'John',
                  comment: 'This is great',
                  likes: 2
                }
              ]
            }
          }
        },
        {
          id: 678,
          user: 'Jane',
          heading: 'Some heading for post',
          body: 'some text for the post',
          img: 'some-url-for-pic',
          interactions: {
            likes: 7,
            liked: true,
            comments: {
              total: 0,
              content: [
                {
                  id: 678,
                  user: 'Sally',
                  comment: 'I love this',
                  likes: 2
                }
              ]
            }
          }
        },
        {
          id: 345,
          user: 'Becky',
          heading: 'Some heading for post',
          body: 'some text for the post',
          img: 'some-url-for-pic',
          interactions: {
            likes: 4,
            liked: false,
            comments: {
              total: 0,
              content: null
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
    .then(data => this.setState({ userData: data.results }))
    .catch(error => this.setState({ error, isLoading: false }))
    // TODO look at this catch error further 
  }

  handleLikeClick = () => {
    console.log('Clicked like');

    // TODO: update post state to increase/decrease like count
  }

  handleCommentClick = () => {
    console.log('Clicked comment');

    // TODO: display comment input
  }

  render() {
    const userData = this.state.userData
    const postData = this.state.postData
    return (
      <div className="social-app">
        <header className="site-header">
          <Header type="1" text="Social App" />
          <Navigation />
        </header>
        
        <Router userData={userData} postData={postData} handleLikeClick={this.handleLikeClick} handleCommentClick={this.handleCommentClick} />
      </div>
    )
  }
}

export default App
