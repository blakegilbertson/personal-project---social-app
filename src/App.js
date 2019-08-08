import React from 'react';
import Router from './routes/index';
// import getUserData from './services/getUsers'
import './stylesheets/css/App.css';

// https://github.com/DavidWells/react-router-tutorial

/*
  Things I've noticed to change: 
  - break js down into separate components 
  - break down css to components where possible
  - stop the randomisation of data - either use different data or grab on homepage load and then not each route render
*/

const Header = (props) => <h1>{props.text}</h1>

const Navigation = () => {
  return (
    <ul className="primary-nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/users">List of users</a>
      </li>
      <li>
        <a href="/profile?id=666">My Profile</a>
      </li>
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
      error: null,
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

  render() {
    const userData = this.state.userData
    return (
      <div className="social-app">
        <header>
          <Header type="1" text="Social App" />
          <Navigation />
        </header>
        
        <Router userData={userData} />
      </div>
    )
  }
}

export default App;
