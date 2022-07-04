import React from "react";
import '../css/CartWidget.css'


export const CartWidget = ({cantItem}) => {
    return(
        <button>
            <i className="bi bi-cart btn"></i>
            <p>{cantItem}</p>
        </button>
    );
}
export default CartWidget;
