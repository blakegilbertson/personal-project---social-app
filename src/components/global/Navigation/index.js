import React from 'react'

const Navigation = () => {
  return (
    <nav id="primary-nav">
      <ul className="primary-nav-list">
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
    </nav>
  )
}

export default Navigation