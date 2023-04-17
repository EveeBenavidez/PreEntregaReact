

const Promesas = () => {

setTimeout( () =>{
    console.log("tarea A")
}, 2000)

setTimeout( () =>{
    console.log("tarea B")
}, 1000)

// promesas

const tusPromesas = (estado) => {
    return new Promise((resolve,reject) =>{
       if(estado){
        resolve("Promesa cumplida")
       }else {
        reject("Promesa rechazada")
       }
    })
}

console.log(tusPromesas(true))

tusPromesas(true)
  .then((respuesta) => {
    console.log(respuesta)
  })
  .catch((error)=> {
    console.log(error)
  }) 
  return (
    <div>
      
    </div>
  )
}

export default Promesas
