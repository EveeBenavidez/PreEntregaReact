import './ItemDetail.css'


const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2> Nombre: {nombre} </h2>
        <h2> Precio: {precio} </h2>
        <h2> ID: {id} </h2>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta error aut illum delectus provident quas odio corporis eos quidem laudantium optio voluptates fugiat quaerat id, natus, magni quo quisquam nobis.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail
