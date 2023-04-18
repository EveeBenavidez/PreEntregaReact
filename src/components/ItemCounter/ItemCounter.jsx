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
      <button className='btn outline' onClick={ decrementar }> - </button>
      <p className='pCounter'>    {contador} </p>
      <button className='btn outline' onClick={ incrementar }> + </button>
      <br />
      
      <button className='btn outline' onClick={agregarAlCarrito}> Agregar al carrito </button>
    </div>
    </>
  )
}

export default ItemCounter
