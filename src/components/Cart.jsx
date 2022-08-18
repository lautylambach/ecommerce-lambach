import React, {useState} from 'react';
import { useCartContext } from './CartContext';
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useRef } from 'react';
import "../css/Cart.css"



const  Cart= ()=> {
  const [compraRealizada,setCompraRealizada] = useState(false)
  const {cart, totalPrice,clear} = useCartContext();
  const [order,setOrder] =useState({});
  const formRef = useRef()
  
  
  
 
  const handleClick = () =>{
    const db = getFirestore();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection, order)
    .then (({id}) => console.log(id))
    .then (alert('se realizo la orden de compra'))
    .then(setCompraRealizada(true))
  }


  if (cart.length === 0){
    return(
      <div>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Seguir comprando</Link>
      </div>
    );
  } 
    return (
    <>
    {compraRealizada?
    <Link to='/'>Volver al Inicio</Link>
    :
      <div className='datos-container'>
        <div className='form'>
          <p>
            Primero necesitamos tus datos:
          </p>
          <form className='form-datos'
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
        formRef.current.reset();
        return(
          alert('Datos cargados')
        )
      }}
      ref={formRef}>
      <input type="text" name='nombre'placeholder='Nombre' />
      <input type="text" name='email' placeholder='Email' />
      <input type="text" name='numero' placeholder='Numero Tel' />
      <input type="text" name='direccion' placeholder='Direccion' />
      <button className='btn btn-light' type='submit'>Cargar Datos</button>
          </form>
        </div>
        <div className='cart'>
          {cart.map(product=><ItemCart key={product.id} product={product}/>)}
        </div>
        <div className='total'>
          <p>Precio Total: ${totalPrice()}</p>
          <button className='btn btn-info' onClick={()=> clear()}>Borrar Carrito</button>
          <button className='btn btn-info' onClick={handleClick}>Generar orden</button>
        </div>
        
      </div>
      
        
    }
      </>
    )
  }
  
  


export default Cart;
