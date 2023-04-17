import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CardWidget from '../CartWidget/CardWidget'
import '../NavBar/NavBar.css'

const Menu = () => {
  return (
    <header>
        <Link to={"/"}>
            <h1> Zulu Shoes </h1>
        </Link>
      
      <nav>
        <ul>
            <li> 
                <NavLink to={"/"}> Home </NavLink>
            </li>
            <li>
                <NavLink to={"/categoria/1"}> Man </NavLink>  
            </li>
            <li> 
                <NavLink to={"/categoria/3"}> Woman </NavLink>
            </li>
            <li>
                <NavLink to={"/categoria/2"}> Selection </NavLink>
            </li>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  )
}

export default Menu
