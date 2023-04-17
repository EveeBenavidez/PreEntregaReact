import React from 'react'
import { useState, useEffect } from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState ("");

    useEffect( () => {
        document.title = `Categoria ${categoria}`;
    }, [categoria]) 
    console.log("se ejecuto useEffect")

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

  return (
    <div>
      <h2> Cat de productos </h2>
      <button onClick={ () => handleClick('Man')}> Man </button>
      <button onClick={ () => handleClick('Woman')}> Woman </button>
      <button onClick={ () => handleClick('Selection')}> Selection </button>
    </div>
  )
}

export default Categorias

