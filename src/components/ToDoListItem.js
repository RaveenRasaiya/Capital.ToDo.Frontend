import React from "react";
import { InputGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { DeleteToDo } from '../services/todoService';
import { useDispatch } from 'react-redux';

export const ToDoListItem = ({ todo }) => {
  const dispatch = useDispatch();


  return (
    <tr key={todo.id}>
      <td className="w-5">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
        </InputGroup>
      </td>
      <td style={{ textAlign: "left" }}>{todo.title}</td>
      <td className="w-10">
        <Trash color="red" onClick={()=> DeleteToDo(dispatch,todo.id)} />
      </td>
    </tr>
  );
};
