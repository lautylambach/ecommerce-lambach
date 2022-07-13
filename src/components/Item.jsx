import React from 'react'
import { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap'
import '../css/Item.css'
import ItemDetailContainer from './ItemDetailContainer';
export const Item = ({info}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='item-container'>
      <div>
        <img className='item-img' src={info.image} alt={info.titulo} />
        <h3 className='item-titulo'>{info.titulo}</h3>
        <span className='item-precio'>{info.precio}</span>
      </div>
      <div>
        <Button className='btn-item' variant="primary" onClick={handleShow}>Comprar</Button>
      </div>
        
        <Modal className='item-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto Seleccionado</Modal.Title>
        </Modal.Header>
        <Modal.Body><ItemDetailContainer info={info}/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    </Container>
  )
}
export default Item;
