import React, { useState, useEffect } from "react";
import { useCartContext } from "./CartContext";
import '../css/CartWidget.css'



export const CartWidget = ({initial}) => {
    const {totalProducts}= useCartContext();
    const[cantCarrito, setCarrito] = useState (parseInt(initial));

    useEffect(()=>{
        setCarrito(parseInt(initial))
    },[initial])

   
        return(
            
            <button>
                <i className="bi bi-cart btn"></i>
                <p>{totalProducts()|| '0'}</p>
            </button>
        );
    

    
}
export default CartWidget;
