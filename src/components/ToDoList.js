import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetAllToDos } from "../services/todoService";
import { Table } from "react-bootstrap";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const toDoItems = useSelector((state) => state.toDosReducer.items);
  const dispatch = useDispatch();

  useEffect(() => {
    GetAllToDos(dispatch);
  }, []);

  if (toDoItems != null && toDoItems.length > 0) {
    return (
      <Table striped bordered hover>
        <tbody>
          {toDoItems.map((todo) => {
            return <ToDoListItem  todo={todo} />;
          })}
        </tbody>
      </Table>
    );
  }
  return <h5>To do list is empty</h5>;
};
