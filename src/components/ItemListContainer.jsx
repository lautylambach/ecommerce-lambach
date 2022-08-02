import React, {useState,useEffect} from 'react'
import '../css/ItemListContainer.css'
import '../css/ItemList.css'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import { getFirestore, collection ,getDocs,query,where } from 'firebase/firestore'




export const ItemListContainer =({greeting}) => {
    
    const [data,setData] = useState([]);

    const {id}= useParams();

    useEffect(() =>{
        

        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos')

        if(id){
            const queryFilter= query(queryCollection, where('categoria','==',id)
            )
            getDocs(queryFilter)
            .then(res=> setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res=> setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }
        

    },[id])


    return(
        <>
        
        <div className='greeting-banner'>
            <h3 className='greeting-h3'>Hola {greeting}</h3>
            <hr className='greeting-hr' />
            <p className='greeting-p'>
                Listo para realizar una compra?!
            </p>
            <div className='item-list'>
            <ItemList  data={data}/> 
            </div>
        
        </div>
        
        
        </>
    )
}



