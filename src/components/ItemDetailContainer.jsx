import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import {useParams} from 'react-router-dom'





export const ItemDetailContainer = () => {

// data promise
const [data, setData] = useState({});
const {idItem} = useParams();
useEffect(()=>{
  {/*const getData =new Promise(resolve =>{
    setTimeout(()=>{
      resolve(items);
    },2000)
  });
  getData.then(res=> setData(res.find( item => item.id === parseInt(idItem))));*/}
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


