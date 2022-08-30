import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {

const [data, setData] = useState({});
const {idItem} = useParams();
useEffect(()=>{
  const querydb = getFirestore();
  const queryDoc = doc(querydb,'productos',
  idItem
  )
  getDoc(queryDoc)
  .then(res=> setData({id:res.id, ...res.data()}))
  
},[]);

  return (
      <ItemDetail data={data}/>
  )
}
export default ItemDetailContainer;


