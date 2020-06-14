import React from 'react';
import Link from '../../components/global/Link'
import ProfilePic from '../../components/user/ProfilePic'

const User = props => {
  console.log('User props: ', props);
  const user = props.user
  
  return (
    <li>
      <ProfilePic className="user-profile-pic" src={user.picture.thumbnail} alt="user"/>

      <span className="user-details">
        <Link href={`/profile?id=${user.id.value}`} text={`${user.name.first} ${user.name.last}`} />, {user.dob.age}
      </span>
    </li>
  )
}

const ListOfUsers = props => {
  const { userData } = props

  return (
    <ul id="list-of-users" className="list-of-users">
      {
        userData.map((user, index) => {
          // console.log('mapping users: ', user);
          const mapKey = user.id.value + index
          return <User key={mapKey} user={user} />
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

  console.log('UserRoute userData: ', userData);
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
