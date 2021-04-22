import React from "react";
import { InputGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { DeleteToDo } from '../services/todoService';
import { useDispatch } from 'react-redux';

export const ToDoListItem = ({ id, title, status }) => {
  const dispatch = useDispatch();


  return (
    <tr key={id}>
      <td className="w-5">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
        </InputGroup>
      </td>
      <td style={{ textAlign: "left" }}>{title}</td>
      <td className="w-10">
        <Trash color="red" onClick={()=> DeleteToDo(dispatch,id)} />
      </td>
    </tr>
  );
};
