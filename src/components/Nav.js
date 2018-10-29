import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to='/' exact activeClassName='active' className='title'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/new' activeClassName='active' className='title'>
                    New Tweet
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default Nav