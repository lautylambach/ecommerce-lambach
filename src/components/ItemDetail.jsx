import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
export const ItemDetail = ({data}) => {
    const[goToCart,setGoToCart] =useState(false);
    const {addItem} = useCartContext();

    const onAdd = (quantity) =>{
        console.log(`añadiste ${quantity} unidades`);
        console.log('se enviara al carrito')
        setGoToCart(true);
        addItem(data,quantity);
        
    }

  return (
    <Container className='container-detail'>
        <div className='detail'>
            <img className='detail-img' src={data.image} alt=""/>
            <div className='content'>
                <h2 className='item-titulo'> {data.titulo}</h2>
                <p className='item-desc'>{data.descripcion}</p>
                <span className='item-precio'>{data.precio}</span>
                {
                goToCart ? 
                <>
                <ItemCount initial={1} stockItem={data.stock} onAdd={onAdd}/>
                <p>Añadiste elementos al carrito</p>
                <Link to='/Cart'>Terminar Compra</Link> 
                </>
                : 
                <ItemCount initial={1} stockItem={data.stock} onAdd={onAdd}/>
                }
                
            </div>
            
        </div>
    </Container>
  )
}
export default ItemDetail;
