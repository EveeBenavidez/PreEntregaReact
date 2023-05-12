import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CardWidget from '../CartWidget/CardWidget'
import '../NavBar/NavBar.css'

const Menu = () => {
  const imgZulu = "https://png2.cleanpng.com/sh/cf580868ff5ee2e039b3f262f2cf5dbe/L0KzQYm3VMAyN5p3iZH0aYP2gLBuTf1ieqQyet5qY3vwf7A0kBhwbV5mgeQ2anB1dLL1TgNvbZJwfeR8LXHnebXok71kaaN5h9H3LYPrf7b6TcVia2JmTqs5MEnlQIS9TsM0PWIATKIDMUW1Qoe7UMUzQGE4Uak3cH7q/kisspng-mars-blackmon-shoe-air-jordan-sneakers-adidas-cartoon-shoes-5ac1a69009b036.3351940815226405280397.png"

  return (
    <header className='headerMenu'>
      
        <Link className='zuluLogobtn'  to={"/"}>
            <h1> Zulu Shoes </h1>
            <img className="imgZulu" src={imgZulu} alt="Logo Zulu" />
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
