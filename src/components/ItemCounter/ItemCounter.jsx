import React from 'react'
import './ItemCounter.css'
import { useState } from 'react';


const ItemCounter = ({inicial, stock, funcionAgregar}) => {

  const [contador, setContador] = useState (inicial);

  const incrementar = () => {
    if(contador < stock){
    setContador (contador + 1);
    }
  }

  const decrementar = () => {
    if(contador > inicial ){ 
    setContador (contador - 1);
    }
  }

  return (
    <>
    <div className='Counter'>
      <button className='btn outline' onClick={ decrementar }> - </button>
      <p className='pCounter'> {contador} </p>
      <button className='btn outline' onClick={ incrementar }> + </button>
      <br />
      
      <button className='btn outline' onClick={() =>funcionAgregar(contador)}> Agregar al carrito </button>
    </div>
    </>
  )
}

export default ItemCounter
