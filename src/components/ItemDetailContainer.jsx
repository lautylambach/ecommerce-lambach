import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export const ItemDetailContainer = ({info}) => {

// data promise
const [data, setData] = useState({});
useEffect(()=>{
  const getData =new Promise(resolve =>{
    setTimeout(()=>{
      resolve(info);
    },3000)
  });
  getData.then(res=> setData(res));
},[])

  return (
    <ItemDetail data={data}/>
    
  )
}
export default ItemDetailContainer;


