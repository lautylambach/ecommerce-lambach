import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';

const item={

}
export const ItemDetailContainer = ({info}) => {
//evento para mostrar el detail//



const [data, setData] = useState({});

useEffect(()=>{
  const getData = new Promise(resolve =>{
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
