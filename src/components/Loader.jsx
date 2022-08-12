import React from 'react';
import { Spinner } from 'reactstrap'
import '../css/bootstrap.min.css'

function Loader(){
    return(
        <div>
            <Spinner color='info'/>
        </div>
    )
}
export default Loader;