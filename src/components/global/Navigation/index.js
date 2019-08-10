import React from 'react'

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

export default Navigation