import React from 'react';
// import userData from '../../data/userData'
// console.log('userData: ', userData);

const User = (props) => <li>{props.user.name.first} {props.user.name.last}</li>

const ListOfUsers = (props) => {
  const { userData } = props

  return (
    <ul id="users">
      {
        userData.map(user => {
          console.log('mapping users: ', user);
          return <User key={user.id.value} user={user} />
        })
      }
    </ul>
  )
}

const LoadingUsers = () => {
  return (
    <div>LOADING USERS, PLEASE WAIT...</div>
  )
}

const UserRoute = (props) => {
  const { userData } = props

  console.log('UserRoute userData: ', userData);
  return (
    <div>
      <h2>SOME USER CONTENT</h2>
      {
        userData ? <ListOfUsers userData={userData} /> : <LoadingUsers />
      }
    </div>
  )
}

export default UserRoute;
