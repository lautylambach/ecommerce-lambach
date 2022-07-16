import React from 'react'
import { useState } from 'react';
import { Button, Container, } from 'react-bootstrap'
import '../css/Item.css'
import ItemDetailContainer from './ItemDetailContainer';
import {Link} from 'react-router-dom'

export const Item = ({info}) => {

  return (
    <Container className='item-container'>
      
      <div>
        <img className='item-img' src={info.image} alt={info.titulo} />
        <h3 className='item-titulo'>{info.titulo}</h3>
      </div>
      <div>
      
        <Button className='btn-item' variant="primary" ><Link to={`/item/:${info.id}`}>Comprar</Link></Button>
        
      </div>
      
    </Container>
  )
}
export default Item;
