import React from 'react'
import UserWrapper from '../../components/users/UserWrapper'
import { useGetUsersQuery } from '../../context/api/userApi'

const Home = () => {
    let {data, error, isError, isLoading, isSuccess} = useGetUsersQuery()
  return (
    <div>
        <UserWrapper isAdmin={false} users = {data}/>
    </div>
  )
}

export default Home
