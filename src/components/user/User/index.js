import React from 'react'
import Link from '../../global/Link'
import ProfilePic from '../ProfilePic'
import UserName from '../UserName'

const User = props => {
  //console.log('User props: ', props);
  const user = props.user
  
  return (
      <Link href={`/profile?user=${user.login.username}`} className="list-of-users-link">
        <ProfilePic className="user-profile-pic" imgSrc={user.picture.large} altTag="user"/> 

        <div className="user-details">
          {/* <span className="user-details-username">@{user.login.username}</span> */}
          <UserName name={`@${user.login.username}`} />
          <span className="user-details-dob">, {user.dob.age}</span>
        </div>
      </Link>
  )
}

export default User