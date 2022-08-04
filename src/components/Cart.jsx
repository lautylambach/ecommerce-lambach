import React from 'react';
import { useCartContext } from './CartContext';
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const  Cart= ()=> {
  const {cart, totalPrice,clear} = useCartContext();
  console.log(cart.length)
  const order = {
    buyer:{
      nombre:'Lautaro',
      email: 'lautaro@gmail.com',
      numero: '123456789',
      direccion: 'los tilos 73'
    },
    date: Date(),
    items:cart.map(product =>({id: product.id, titulo: product.titulo, precio: product.precio, quantity: product.quantity})),
    total: totalPrice(),
  }
  const handleClick = () =>{
    const db = getFirestore();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection, order)
    .then (({id}) => console.log(id))
    .then (alert('se realizo la orden de compra'))
  }



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
        <button onClick={handleClick}>Generar orden</button>
      </>
    )
  

}
export default Cart;
