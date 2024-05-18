import React, { useState }  from 'react'
import { usePostUserMutation } from '../../../context/api/userApi'

let initialState ={
  name: "",
  age: ""
}

const CreateUser = () => {
  let [ createUser, {isLoading}] = usePostUserMutation()
  const [newUser, setNewUser] = useState(initialState)
  const handleCreateUser =(e) =>{
    e.preventDefault()
    createUser(newUser)
  }
  return (
    <div className='container create'>
      <h2 className='h2'>CreateUser</h2>
      <form onSubmit={handleCreateUser} action="">
        <input value={newUser.name}
        onChange={e => setNewUser(prev => ({...prev, name: e.target.value}))}
        type='text'
        />
        <input value={newUser.age}
        onChange={e => setNewUser(prev => ({...prev, age: e.target.value}))}
        type='number'
        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default CreateUser
