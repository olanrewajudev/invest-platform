import React from 'react'
import UserHead from './UserHead'
import UserFoot from './UserFoot'

const UserLayouts = ({children}) => {
  return (
    <div>
      <UserHead />
      {children}
      <UserFoot />
    </div>
  )
}

export default UserLayouts
