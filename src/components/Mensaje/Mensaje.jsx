import { useState } from "react"



const Mensaje = () => {
   const [mensaje, setMensaje] = useState(false)
   
   const manejadorMensaje = () => {
    setMensaje (!mensaje)
   }


  return ( 
    <div>
        <br />
      <button onClick={ manejadorMensaje }> { mensaje ? "Ocultar" : "Mostrar"} </button>
      {mensaje && <h2> "Número de Contacto: " </h2>}
    </div>
  )
}

export default Mensaje
