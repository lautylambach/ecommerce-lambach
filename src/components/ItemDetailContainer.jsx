import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'


export const ItemDetailContainer = ({info}) => {

// data promise
const [data, setData] = useState({});
const {idItem} = useParams();
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


