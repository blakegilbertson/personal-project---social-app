import React from 'react';
import User from '../../components/user/User'

const ListOfUsers = props => {
  const { userData } = props

  return (
    <ul id="list-of-users" className="list-of-users">
      {
        userData.map((user, index) => {
          console.log(`[${index}] mapping users: `, user);
          const userName = user.login.username
          const mapKey = `${userName}_${index}` //user.id.value + index
          
          return (
            <li key={index} data-username={userName}>
              <User key={index} user={user} />
            </li>
          )
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

const UserRoute = props => {
  const { userData } = props

  //console.log('UserRoute userData: ', userData);
  return (
    <div className="user-route">
      <h2>SOME USER CONTENT</h2>
      {
        userData ? <ListOfUsers userData={userData} /> : <LoadingUsers />
      }
    </div>
  )
}

export default UserRoute;
