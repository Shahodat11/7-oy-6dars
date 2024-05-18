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
      <img className='img' src={user.avatar} alt="" />
      <h2 className='name'>{user.name}</h2>
      <p  className='age'>{user.age}</p>
      {
        isAdmin ?
        <>
          <button className='btn'>edit</button>
          <button className='btn' onClick={()=>handleDeleteUser(user.id)}>delete</button>
        </>
        :
        <></>
      }
    </div>
  ))
  return (
    <div className='container'>
      <div className="user__wrapper">
        {userItems}
      </div>
    </div>
  )
}

export default memo(UserWrapper)
