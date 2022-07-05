import React, { useState, useEffect } from "react";
import '../css/CartWidget.css'


export const CartWidget = ({initial}) => {
    
    const[cantCarrito, setCarrito] = useState (parseInt(initial));

    useEffect(()=>{
        setCarrito(parseInt(initial))
    },[initial])


    return(
        <button>
            <i className="bi bi-cart btn"></i>
            <p>{cantCarrito}</p>
        </button>
    );
}
export default CartWidget;
