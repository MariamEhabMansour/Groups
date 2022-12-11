import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
       
 <div>

  <nav class="navbar navbar-expand-lg  mt-2">
  <div class="container-fluid">
    <div className='row col-12'>

    
    <a class="navbar-brand" href="#"><img src='http://localhost:3000/img/whole.png'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg></span>
    </button>
    <div class="collapse navbar-collapse col-10 ml-5" id="navbarSupportedContent">
    
      <form class="d-flex justify-contant-between col-4 float-left searchDiv" role="search">
        <input class="form-control mt-3 search" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
       
      </form>
      <ul class="navbar-nav me-auto me-2  mb-2 mb-lg-0 ml-5 float-right col-2">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          Create account. <apan class="font-weight-bold text-primary"> It’s free!</apan>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Sign in</a></li>
            <li><a class="dropdown-item" href="#">Sign Up</a></li>
           
          </ul>
        </li>
       
      </ul>
    </div>
    </div>
  </div>
</nav>
{/* 
<>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    */}
  </div>
  )
}

export default Nav