import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import useLogout from '../Common/useLogout'
const Header = () => {
    const logout=useLogout();
    
    return (
        <div className='headerCon'>
            <h5>SkyGoals</h5>
            <div className='dashboards'>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/userList'}>Frds</NavLink>
            </div>
            <div>
                <button onClick={()=>{logout()}}>Logout</button>
            </div>
        </div>
    )
}

export default Header