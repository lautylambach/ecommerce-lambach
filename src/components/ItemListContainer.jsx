import React from 'react'
import '../css/ItemListContainer.css'

export const ItemListContainer =({greeting}) => {
    return(
        <>
        
        <div className='greeting-banner'>
            <h3 className='greeting-h3'>Hola {greeting}</h3>
            <hr className='greeting-hr' />
            <p className='greeting-p'>
                Listo para realizar una compra?!
            </p>
        </div>
        
        </>
    )
}


