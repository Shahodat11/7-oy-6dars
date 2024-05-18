import React from 'react'
import { Link } from 'react-router-dom';
import ManageUser from './manage-user/ManageUser';
import CreateUser from './create-user/CreateUser';

const Admin = () => {
  return (
    <div>
      <h2>Admin</h2>
      <Link to="/admin/manage">manage</Link>
      <Link to="/admin/create"><CreateUser/></Link>
    </div>
  )
}

export default Admin
