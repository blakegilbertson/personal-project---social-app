// use fetch/async/promises to return data from https://jsonplaceholder.typicode.com/users

const getUserData = () => {
  const userDataState = this.state;

  console.log('getUserData userDataState: ', userDataState);

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(data => this.setState({ userData: data }));
}

export default getUserData