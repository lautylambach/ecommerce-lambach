import React from 'react';
import { Spinner } from 'reactstrap'
import '../css/bootstrap.min.css'
import '../css/Cart.css'

function Loader(){
    return(
        <div className='spinner'>
            <Spinner color='info'/>
        </div>
    )
}
export default Loader;