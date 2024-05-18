import React, {memo} from 'react'

const UserWrapper = ({users}) => {
  let userItems = users?.map((user) => (
    <div key={user.id}>
      <img src={user.avatar} alt="" />
      <h2>{user.name}</h2>
      <p>{user.age}</p>
    </div>
  ))
  return (
    <div>
      <h2>UserWrapper</h2>
      {userItems}
    </div>
  )
}

export default memo(UserWrapper)
