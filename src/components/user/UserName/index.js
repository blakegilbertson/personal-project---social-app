import React from 'react'

const UserName = (props) => {
  return (
    <a href="/profile?" className="users-name">{props.name}</a>
  )
}

export default UserName