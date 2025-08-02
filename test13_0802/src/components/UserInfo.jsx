import React, {memo} from 'react'

const UserInfo = memo(({user}) => {
  return (
    <div>{user.name} ({user.age})</div>
  )
})

export default UserInfo