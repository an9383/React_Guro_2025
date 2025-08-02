import React,{memo} from 'react'


const UserInfo = memo(({user})) => {
    return (
        <div>
            {user.name} 
            {user.age}
        </div>
    )
}
const UserInfo = () => {
  return (
    <div>UserInfo</div>
  )
}

export default UserInfo