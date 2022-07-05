import React from 'react'
import '../css/ItemListContainer.css'
import ContadorConBoton from './ContadorConBoton'
import CartWidget from './CartWidget'

export const ItemListContainer =({greeting}) => {

    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`);
        console.log('se enviara al carrito')
        
    }

    return(
        <>
        
        <div className='greeting-banner'>
            <h3 className='greeting-h3'>Hola {greeting}</h3>
            <hr className='greeting-hr' />
            <p className='greeting-p'>
                Listo para realizar una compra?!
            </p>
            <div>
            <ContadorConBoton initial={1} stockItem={10} onAdd={onAdd}/>
            </div>
        </div>
        
        
        </>
    )
}



