import React from 'react'
import '../css/Item.css'
export const Item = ({info}) => {
  return (
    <div className='item-container'>
        <img className='item-img' src={info.image} alt={info.titulo} />
        <h3 className='item-titulo'>{info.titulo}</h3>
        <p className='item-desc'>{info.descripcion}</p>
        <span className='item-precio'>{info.precio}</span>
    </div>
  )
}
export default Item;
