import React from 'react'
import './NavBar.css'
import CardWidget from '../CartWidget/CardWidget'

const NavBar = () => {
  return (
    <header>
      <h1> Zulu Shoes </h1>

      <nav>
        <ul>
          <li> Man </li>
          <li> Woman </li>
          <li> Sale </li>
          <li> Zulu Selection </li>
        </ul>
      </nav>

      <CardWidget/>

    </header>
  )
}

export default NavBar
