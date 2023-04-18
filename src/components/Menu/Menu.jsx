import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CardWidget from '../CartWidget/CardWidget'
import '../NavBar/NavBar.css'

const Menu = () => {
  return (
    <header className='headerMenu'>
        <Link to={"/"}>
            <h1> Zulu Shoes </h1>
        </Link>
      
      <nav>
        <ul>
            <li> 
                <NavLink to={"/"} className={"aMenu"}> Home </NavLink>
            </li>
            <li>
                <NavLink to={"/categoria/1"} className={"aMenu"}> Man </NavLink>  
            </li>
            <li> 
                <NavLink to={"/categoria/3"} className={"aMenu"}> Woman </NavLink>
            </li>
            <li>
                <NavLink to={"/categoria/2"} className={"aMenu"}> Selection </NavLink>
            </li>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  )
}

export default Menu
