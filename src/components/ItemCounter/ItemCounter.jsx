import React from 'react'
import './ItemCounter.css'

// IMPORTO useState  
import { useState } from 'react';


const ItemCounter = () => {
let inicial = 1;
let maximo = 10;

  const [contador, setContador] = useState (inicial);

  const incrementar = () => {
    if(contador < maximo){
    setContador (contador + 1);
    }
  }

  const decrementar = () => {
    if(contador > inicial ){ 
    setContador (contador - 1);
    }
  

}
const agregarAlCarrito = () => {
  console.log(`Agregado ${contador} items`)
} 
  return (
    <>
    <div className='Counter'>
      <button onClick={ decrementar }> - </button>
      <p>    {contador} </p>
      <button onClick={ incrementar }> + </button>
      <br />
      
      <button onClick={agregarAlCarrito}> Agregar al carrito </button>
    </div>
    </>
  )
}

export default ItemCounter
