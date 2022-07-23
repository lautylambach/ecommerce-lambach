import React, { useContext, useState, createContext } from "react";


const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    useState[cart,setCart] = useState([]);
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const addItem = (item,quantity) =>{
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ?
                {...product, quantity: product.quantity+quantity}
                :
                product
            }));
        }else{
            setCart([...cart,{...item,quantity}]);
        }
    }
    console.log('carrito: ', cart);

    const clear = () => setCart([]);
    
    

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));
    
    return(
        <CartContext.provider value={{
            clear,
            isInCart,
            removeItem,
            addItem
        }} >
            {children}
        </CartContext.provider>
    )
}
export default CartProvider;