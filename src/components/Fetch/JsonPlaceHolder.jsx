import { useState,useEffect } from "react"



const JsonPlaceHolder = () => {
   
    const [usuarios ,setUsuarios] = useState([])

   useEffect (()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(data => setUsuarios(data))
        .catch(error => console.log(error))
   },[])

  return (
    <div>
      <h2> Usuarios de JSONPLHOLD: </h2>
      {
        usuarios.map(usuario => {
            return (
                <div>
                    <p> Nombre : {usuario.name} </p>
                </div>
            )
        })
      }

    </div>
  )
}

export default JsonPlaceHolder
