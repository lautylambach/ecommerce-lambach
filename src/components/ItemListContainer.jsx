import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer =({greeting}) => {
    return(
        <>
        <center>
        <div className='greeting-banner'>
            <h3 className='greeting-h3'>Hola {greeting}</h3>
            <hr className='greeting-hr' />
            <p className='greeting-p'>
                Listo para realizar una compra?!
            </p>
        </div>
        </center>
        </>
    )
}


