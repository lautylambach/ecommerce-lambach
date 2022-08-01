import React from 'react';
import { useCartContext } from './CartContext';
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';

const  Cart= ()=> {
  const {cart, totalPrice,clear} = useCartContext();
  console.log(cart.length)
  
  if (cart.length === 0){
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Seguir comprando</Link>
      </>
    );
  } 
    return (
      <>
        {
          cart.map(product=><ItemCart key={product.id} product={product}/>)
        }
        <p>Precio Total: ${totalPrice()}</p>
        <button onClick={()=> clear()}>Borrar Carrito</button>
      </>
    )
  

}
export default Cart;
