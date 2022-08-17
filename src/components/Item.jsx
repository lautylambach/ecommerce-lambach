import React from 'react'
import { Button } from 'react-bootstrap'
import '../css/Item.css'
import {Link} from 'react-router-dom'


export const Item = ({info}) => {

  return (
    <div className='item-container container-fluid'>
      
      <div>
        <img className='item-img' src={info.image} alt={info.titulo} />
        <h3 className='item-titulo-list'>{info.titulo}</h3>
      </div>
      <div>
      
        <Button className='btn-item' variant="primary" ><Link className='navlink' to={`/item/${info.id}`}>Comprar</Link></Button>
        
      </div>
      
    </div>
  )
}
export default Item;
