
import { useCartContext } from "../context/Provider";
import '../css/CartWidget.css'

export const CartWidget = ({initial}) => {
    const {totalProducts}= useCartContext();
        return(

            <button>
                <i className="bi bi-cart btn"></i>
                <p>{totalProducts()|| ''}</p>
            </button>
        );
}
export default CartWidget;
