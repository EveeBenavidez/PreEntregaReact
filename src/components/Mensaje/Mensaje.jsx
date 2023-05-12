import { useState } from "react"
import './Mensaje.css'


const Mensaje = () => {
   const [mensaje, setMensaje] = useState(false)
   

   const manejadorMensaje = () => {
    setMensaje (!mensaje)
   }


  return (
    
    <div>
        <br /> 
        
      <button className="btn fill"  onClick={ manejadorMensaje } > { mensaje ? "Ocultar" : "Contacto"} </button>
      {mensaje && <h2> "Número de Contacto: 0387-4123321 " </h2>}
    </div>
  )
}

export default Mensaje
