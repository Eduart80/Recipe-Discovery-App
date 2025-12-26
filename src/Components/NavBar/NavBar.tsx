import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav>
        <ul id='nav'>
            <li><NavLink style={({ isActive }) => ({
                    color: isActive ? 'green' : 'lightgreen',
                })}
                 to={'/'}>Home</NavLink></li>
             <li><NavLink style={({ isActive }) => ({
                    color: isActive ? 'green' : 'lightgreen',
                })}
                 to={'/category'}>Category</NavLink></li>
             <li><NavLink style={({ isActive }) => ({
                    color: isActive ? 'green' : 'lightgreen',
                })}
                 to={'/recipe'}>Recipe</NavLink></li>
             <li><NavLink style={({ isActive }) => ({
                    color: isActive ? 'green' : 'lightgreen',
                })}
                 to={'/favorites'}>Favorites</NavLink></li>
        </ul>
    </nav>
    
    </>
  )
}
