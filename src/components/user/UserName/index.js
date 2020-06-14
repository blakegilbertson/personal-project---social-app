import React from 'react'
import Link from '../../global/Link'

const UserName = props => {
  return (
    <Link href='/profile?' text={props.name} />
  )
}

export default UserName