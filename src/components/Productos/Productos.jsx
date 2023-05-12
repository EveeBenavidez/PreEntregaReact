import React from 'react'
import { useEffect, useState } from 'react'

//importamos hooks
import { getDocs,collection, query, where } from 'firebase/firestore'


// importamos objeto
import { db } from '../../service/firebase/config'


const Productos = () => {
   const [productos, setProductos] = useState([]);

   useEffect(() =>{
    const misProductos =query(collection(db, "productos"), where("precio", "<", 900))

    getDocs(misProductos)
     .then((respuesta)=> {
        setProductos(respuesta.docs.map ((doc)=> ({id: doc.id, ...doc.data()}))); //nuevo array que contiene datos del producto y ademas id

     } ) 


   },[]);



  return (
    <div>
      <h2> Productos </h2>
      {
        productos.map((producto) => (
        <div key={producto.id}>
            <h2> {producto.nombre} </h2>
            <img src={producto.img} alt="" />
            <p> Precio: $ {producto.precio} </p>
            <p> Stock {producto.stock} </p>
            
            <button> Agregar al carrito </button>
        </div>
        ))
    }

    </div>  
  )
}
    



export default Productos
