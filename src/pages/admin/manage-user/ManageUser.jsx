import React from 'react'
import { useGetUsersQuery } from '../../../context/api/userApi'
import UserWrapper from '../../../components/users/UserWrapper'

const ManageUser = () => {
  let { data } = useGetUsersQuery()
  return (
    <div>
      <h2>ManageUser</h2>
      <UserWrapper isAdmin={true} users={data}/>
    </div>
  )
}

export default ManageUser
