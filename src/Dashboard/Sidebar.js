import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {
    let open =  true;
  return (
    <>
      <div className='sidebarOuter'>
     <img className='logo' src="/images/logo.png" width="100%" />
          {/* <ul>
            <li><a className='active'> <Link to='/dashboard' > <i className="fa fa-home" aria-hidden="true"></i> Dashboard </Link></a></li>
            <li><a><i className="fa fa-newspaper-o" aria-hidden="true"></i> Post</a></li>
          </ul> */}
          <ul>
            <li><NavLink to='/dashboard/home' className={({ isActive }) => (isActive ? 'active' : 'inactive')} > <i className="fa fa-home" aria-hidden="true"></i> Dashboard </NavLink></li>
            <li><NavLink to='/dashboard/post-list' className={({ isActive }) => (isActive ? 'active' : 'inactive')} > <i className="fa fa-newspaper-o" aria-hidden="true"></i> Post </NavLink></li>
          </ul>
      </div>
    </>
  )
}
