import React from 'react'
import Link from '../Link'

const Navigation = () => {
  return (
    <nav id="primary-nav">
      <ul className="primary-nav-list">
        <li>
          <Link href='/' className="primary-nav-list-home" text="Home" />
        </li>
        <li>
          <Link href='/users' className="primary-nav-list-users" text="List of users" />
        </li>
        <li>
          <Link href='/profile?id=666' text="My Profile" />
        </li>
        {/* <li>
          <a href="/redux-test">Redux</a>
          <Link href='/redux-test' text="Redux" />
        </li> */}
      </ul>
    </nav>
  )
}

export default Navigation