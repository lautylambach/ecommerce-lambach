import React, {useEffect, useState} from 'react'
import '../css/ItemCount.css'
import { Button } from 'react-bootstrap'

 const ItemCount = ({initial, stockItem, onAdd}) => {
    const [numero, setNumero] = useState (parseInt(initial));

    const reducir = () =>{
        setNumero(numero - 1);
    }
    
    const aumentar = () =>{
        setNumero(numero + 1);
    }

    useEffect (()=>{
        setNumero(parseInt(initial))
    }, [initial])


  return (
    <div className='contador-container'>
        <div className='contador'>
            <Button className='contador-btn' disabled={numero<= 1} onClick={reducir}>-</Button>
            <span>{numero}</span>
            <Button className='contador-btn' disabled={numero >= stockItem} onClick={aumentar}>+</Button>
        </div>
        <div>
            <Button disabled={stockItem <=0} onClick={()=>onAdd(numero)} className='carrito-btn'>Agregar al Carrito</Button>
        </div>
    </div>
  )
}
export default ItemCount;
