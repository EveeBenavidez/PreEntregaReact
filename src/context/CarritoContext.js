// importo useState y createContext

import { useState, createContext } from "react";

//creamos un nuevo contexto

export const CarritoContext = createContext ({carrito:[]})

//proveedor "CarritoProvider"

export const CarritoProvider = ({children}) => {
    //estado local del carrito con usestate
    
    const [carrito, setCarrito] = useState ([]);
    console.log(carrito)

    //agrego metodos para manipular el carrito

    const agregarProducto = (item, cantidad) => {
       if (!verificadorCarrito(item.id)) {
        setCarrito(prev => [...prev, {item, cantidad}])
       } else{
        console.log("Prod ya agregado")
       }
    }
   
   // funcion eliminadora de productos del carrito
  
    const eliminarProducto = (id) =>{
        const carritoActualizado = carrito.filter ( prod => prod.id !== id)
        setCarrito (carritoActualizado);
    }


    //funcion vaciado de carrito

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    
   // funcion de verificacion de un producto en el carrito 

   const verificadorCarrito = (id) => {
    return carrito.some(prod => prod.id === id);
   }

   //usamos carritocontext.provider para enviar valor al carrito

   return (
    <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}} >
        {children}
    </CarritoContext.Provider>
   )




}