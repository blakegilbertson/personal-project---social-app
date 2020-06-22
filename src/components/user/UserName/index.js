import React from 'react'
import Link from '../../global/Link'

const UserName = props => {
  console.log('UserName props: ', props);
  return (
    <Link href='/profile?' text={props.name}>
      <span className="user-name">{props.name}</span>
    </Link>
  )
}

export default UserName