import React from 'react'
import { Container } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css';
export const ItemDetail = ({data}) => {

    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`);
        console.log('se enviara al carrito')
        
    }

  return (
    <Container className='container-detail'>
        <div className='detail'>
            <img className='detail-img' src={data.image} alt=""/>
            <div className='content'>
                <h2 className='item-titulo'> {data.titulo}</h2>
                <p className='item-desc'>{data.descripcion}</p>
                <span className='item-precio'>{data.precio}</span>
                <ItemCount initial={1} stockItem={data.stock} onAdd={onAdd}/>
            </div>
            
        </div>
    </Container>
  )
}
export default ItemDetail;
