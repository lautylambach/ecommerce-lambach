import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/Item.css'
export const Item = ({info}) => {
  return (
    <Container className='item-container'>
        <img className='item-img' src={info.image} alt={info.titulo} />
        <h3 className='item-titulo'>{info.titulo}</h3>
        
        <span className='item-precio'>{info.precio}</span>
    </Container>
  )
}
export default Item;
