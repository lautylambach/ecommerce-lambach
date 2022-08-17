import React from "react";
import { useCartContext } from "./CartContext";
import '../css/ItemCart.css'

const ItemCart = ({product}) =>{
   const {removeItem} =  useCartContext();
    return(
        <div className="itemCart">
            <img className="itemCart-img" src={product.image} alt={product.title} />
            <div className="container-item-cart">
                <p className="itemCart-titulo">Titulo: {product.titulo}</p>
                <p className="itemCart-contenido">Cantidad: {product.quantity}</p>
                <p className="itemCart-contenido">Pecio u.: ${product.precio}</p>
                <p className="itemCart-contenido">Subtotal: ${product.quantity*product.precio}</p>
                <button className='btn btn-info' onClick={()=> removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )

}
export default ItemCart