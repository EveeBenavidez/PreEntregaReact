import './CartItem.css'


const CartItem = ({item, cantidad}) => {
    return (
      <div className='divCard'>
          <h3> {item.nombre} </h3>
          <img className='imgCard' src={item.img} alt="" />
          <p>Cantidad: {cantidad} </p>
          <p>Precio: $ {item.precio} </p>
      </div>
    )
  }
  
  export default CartItem