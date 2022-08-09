import React, {useState} from 'react';
import { useCartContext } from './CartContext';
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useRef } from 'react';
import { useEffect } from 'react';


const  Cart= ()=> {
  const {cart, totalPrice,clear} = useCartContext();
  console.log(cart.length)
  const [order,setOrder] =useState({});
  const formRef = useRef()
  
  const sendUserData = () =>{
    
  }
  useEffect(()=> {
    
      formRef.current.reset();
      console.log('done')
      return(
        alert('Datos cargados')
      )
    
  }, [sendUserData])
 
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
      <div>
      <p>
      Primero necesitamos tus datos:
    </p>
    <form
      onSubmit ={ev =>{
        ev.preventDefault();
        setOrder({
          buyer:{
            nombre:ev.target.nombre.value  ,
            email: ev.target.email.value,
            numero: ev.target.numero.value,
            direccion: ev.target.direccion.value
          },
          date: Date(),
          items:cart.map(product =>({id: product.id, titulo: product.titulo, precio: product.precio, quantity: product.quantity})),
          total: totalPrice(),
        })
      }}
      ref={formRef}
    >
      <input type="text" name='nombre'placeholder='Nombre' />
      <input type="text" name='email' placeholder='Email' />
      <input type="text" name='numero' placeholder='Numero Tel' />
      <input type="text" name='direccion' placeholder='Direccion' />
      <button type='submit' onClick={sendUserData}>Cargar Datos</button>
    </form>
    </div>
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
