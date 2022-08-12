import React, {useState,useEffect} from 'react'
import '../css/ItemListContainer.css'
import '../css/ItemList.css'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import { getFirestore, collection ,getDocs,query,where } from 'firebase/firestore'
import Loader from './Loader'



export const ItemListContainer =({greeting}) => {
    const [loader,setLoader] = useState(false);
    const [data,setData] = useState([]);

    const {id}= useParams();
    
    useEffect(() =>{
        

        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos')
        setLoader(true)
        setTimeout(()=>{
            setLoader(false);
        },1500)

       
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
                {
                loader ?
                <Loader/>
                :
                <ItemList  data={data}/>
                }      
            
            </div>
        </div>
        </>
    )
}



