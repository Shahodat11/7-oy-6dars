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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop All</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <NavLink to ={"/admin/create"}>
              <span>Create</span>
            </NavLink>
            <NavLink to ={"/admin/manage"}>
              <span>manage</span>
            </NavLink>
          </ul>
        </div>
        {/* <img src={logo} alt="" /> */}
        <div className="nav">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <input type="text" placeholder='Search Product...' />        
        </div>
      </div>
    </div>
  )
}

export default Navbar