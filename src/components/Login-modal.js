import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './c-style/LoginModal.css'


const LoginModel = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="danger" variant="danger" onClick={handleShow}>
        SE CONNECTER
      </Button>

      <Modal className="loginModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: "#fff"}}>Se Connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color: "#fff"}}>E-mail</Form.Label>
             <Form.Control type="email" placeholder="Entrer l'email" />
         </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color: "#fff"}}>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Mot de passe" />
  </Form.Group>
  <Button  className="submit-btn"  type="submit">
    Se Connecter 
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModel