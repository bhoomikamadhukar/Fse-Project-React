import React from "react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";


export const UserList = ({users, deleteUser,updateUser}) => {
  const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true);
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    // const  [user,setUser] = useState(),
    //       onInput = ({target:{user}}) => setUser(user)
    const onLoginFormSubmit = (e) => {
    e.preventDefault();
    // console.log(user)
    handleClose();

  };

const SayHello=(user)=>{
console.log(user._id)
    return(
    <Form onSubmit={onLoginFormSubmit}>
        <Form.Group controlId="formBasicEmail">

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder={user.email} value ={user.email} />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Update
        </Button>
      </Form>
    );
  }

  return (
    <div className="list-group">

      {
        users.map(user => {
          return (
            <>
            <div className="list-group-item">
          <span className="fs-3">
            Name : {user.username}
{' '}
Role: {user.role}
          </span>

              <button onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                deleteUser(user._id)
              }} className="btn btn-danger fa-pull-right">
                <i className="fas fa-remove"></i>

              </button>
              <button onClick={(e)=>{
                e.stopPropagation()
                e.preventDefault()
                SayHello(user)
                
                handleShow()}} className="btn btn-danger fa-pull-right">
              <i className="fas fa-edit"></i>
            </button>
          </div>

          <Modal show={show}>
       <Modal.Header closeButton>
         <Modal.Title>Update User</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <SayHello />
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={handleClose} variant="secondary">Close Modal</Button>
       </Modal.Footer>
     </Modal>
     </>
          )
        })
      }
    </div>)
};

// export default UserList;
