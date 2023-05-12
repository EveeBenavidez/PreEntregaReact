import { useState } from "react"
import { dbUsuarios } from "../../service/configUsuarios"
import { collection, addDoc } from "firebase/firestore"
import './Formulario.css'

const Formulario = () => {
  const [nombre,setNombre] = useState("");
  


  return (
    <div>
      <h3>FORMULARIO </h3>
    </div>
  )
}

export default Formulario
