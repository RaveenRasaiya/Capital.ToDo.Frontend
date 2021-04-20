import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewToDo, ModifyToDo } from "../services/todoService";

export const NewToDoModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="btn btn-success">
        New To Do
      </Button>
      <ToDoModal todo={null} handleFormSubmit={NewToDo} show={show} handleClose={handleClose} />
    </div>
  );
};

export const EditToDoModal = ({ todo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="btn btn-warning">
        Edit To Do
      </Button>
      <ToDoModal todo={todo} handleFormSubmit={ModifyToDo} show={show} handleClose={handleClose} />
    </div>
  );
};

const ToDoModal = ({ todo, handleFormSubmit, show, handleClose }) => {
  const [modalToDo, setModalToDo] = useState({ statusId: 1 });
  const dispatch = useDispatch();

  useEffect(() => {
    setModalToDo(todo);
  }, [todo]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>To Do</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmit(dispatch, modalToDo);
        }}
      >
        <Modal.Body>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={modalToDo === null ? "" : modalToDo.title}
              onChange={(event) => setModalToDo({ ...modalToDo, title: event.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              onChange={(event) => setModalToDo({ ...modalToDo, statusId: event.target.value })}
              as="select"
              value={modalToDo === null ? "1" : modalToDo.statusId}
            >
              <option value="1">New</option>
              <option value="2">In Porgress</option>
              <option value="3">Completed</option>
              <option value="4">Cancelled</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
