import React, { useContext, useState, createContext } from "react";


const CartContext = createContext([]);

export const useCartContext = () => useContext    (CartContext);

 const CartProvider = ({children}) =>{

    const[cart ,setCart] = useState([]);
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }
    const totalPrice =()=>{
        return cart.reduce((prev, act)=> prev+act.quantity*act.precio, 0);
    }
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
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
    

    const clear = () => setCart([]);
    
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));
    
    return(
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalProducts,
            
            cart
        }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;