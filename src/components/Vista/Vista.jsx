import React from 'react'
import './Vista.css'
import { useState } from 'react'

const Vista = () => {

    const [modoOscuro, setModoOscuro] = useState (false);

    const cambiarModo = () => {
        setModoOscuro (!modoOscuro)
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className= {estilo}>

      <button onClick={ cambiarModo } > { modoOscuro ? "Modo claro" : "Modo oscuro"} </button>
      
      <h2> Componente Vista </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit necessitatibus sit at soluta nesciunt molestiae, aliquid consequatur ipsa magni ea similique sed reprehenderit numquam cumque quaerat sapiente asperiores esse.
      </p>

    </div>
  )
}

export default Vista
