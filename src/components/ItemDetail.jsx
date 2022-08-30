import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/Provider';
import Loader from './Loader';
import { useEffect } from 'react';

export const ItemDetail = ({data}) => {
    const[goToCart,setGoToCart] =useState(false);
    const {addItem} = useCartContext();
    const [loader,setLoader] = useState(true);

    const onAdd = (quantity) =>{
        setGoToCart(true);
        addItem(data,quantity); 
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        },1000)
    })

  return (
    <Container className='container-detail'>
        {loader ?
        <Loader/>
        :
        <div className='detail'>
            <img className='detail-img' src={data.image} alt=""/>
            <div className='content'>
                <h2 className='item-titulo'> {data.titulo}</h2>
                <p className='item-desc'>{data.descripcion}</p>
                <span className='item-precio'>${data.precio}</span>
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
        }
    </Container>
  )
}
export default ItemDetail;
