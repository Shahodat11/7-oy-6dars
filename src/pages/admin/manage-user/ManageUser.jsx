import React from 'react'
import { useGetUsersQuery } from '../../../context/api/userApi'
import UserWrapper from '../../../components/users/UserWrapper'

const ManageUser = () => {
  let { data } = useGetUsersQuery()
  return (
    <>
    <div className='container'>
      <h2 className='h2'>ManageUser</h2>
      </div>
      <UserWrapper isAdmin={true} users={data}/>
    </>

  )
}

export default ManageUser
