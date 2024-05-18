import React from 'react'
import '../header/header.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    // const count = useSelector(state => state.counter.value)
  return (
    <div className='container'>
      <div className="nav-links">
        <div className="item">
          <ul>
            <li>
          <NavLink to ={"/"}>
            <span>Home</span>
          </NavLink>
            </li>
            <NavLink to ={"/admin/create"}>
              <span>Create Admin</span>
            </NavLink>
            <NavLink to ={"/admin/manage"}>
              <span>Manage Admin</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
