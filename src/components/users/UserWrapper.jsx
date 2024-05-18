import React, {memo} from 'react'
import '../users/UserWrapper.css'
import { useDeleteUserMutation } from '../../context/api/userApi'

const UserWrapper = ({users, isAdmin}) => {
  let [deleteUser,{isLoading}] = useDeleteUserMutation()
  const handleDeleteUser = (id) =>{
    deleteUser(id)
  }

  let userItems = users?.map((user) => (
    <div className='user__card' key={user.id}>
      <img src={user.avatar} alt="" />
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      {
        isAdmin ?
        <>
          <button>edit</button>
          <button onClick={()=>handleDeleteUser(user.id)}>delete</button>
        </>
        :
        <></>
      }
    </div>
  ))
  return (
    <div>
      <h2>UserWrapper</h2>
      <div className="user__wrapper">
        {userItems}
      </div>
    </div>
  )
}

export default memo(UserWrapper)
