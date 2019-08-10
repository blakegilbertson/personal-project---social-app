import React from 'react';
// import userData from '../../data/userData'
// console.log('userData: ', userData);
import myData from './my-profile.json'

const UserImage = (props) => {
  const { imgUrl } = props

  console.log(imgUrl);
  return (
    <div className="profile-image">
      <img src={imgUrl} alt="user" />
    </div>
  )
}

const LoadingUsers = () => {
  return (
    <div>LOADING USERS, PLEASE WAIT...</div>
  )
}

const ProfileRoute = () => {
  // const { userData } = props

  const userData = myData

  console.log('ProfileRoute userData: ', userData);

  return (
    <div className="profile-route">
      <h2>My PROFILE</h2>
      {
        !userData ?
        <LoadingUsers /> :
        <div>
          <div className="basic-info">
            <p>{userData.name.first} {userData.name.last}, {userData.dob.age}</p>
            <p></p>
          </div>
          <UserImage imgUrl={userData.picture.large} />
        </div>
      }
    </div>
  )
}

export default ProfileRoute;
