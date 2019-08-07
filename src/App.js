import React from 'react';
import Router from './routes/index';
// import getUserData from './services/getUsers'
import './App.css';

// https://github.com/DavidWells/react-router-tutorial

const Header = (props) => {
  const { text } = props
  return(
    <h1>
      {text}
    </h1>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => this.setState({ userData: data.results }))
    .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header type="1" text="Social App" />

          <Router userData={this.state.userData} />
        </header>
      </div>
    )
  }
}

export default App;
