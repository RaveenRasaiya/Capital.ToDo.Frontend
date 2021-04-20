import React from "react";
import { InputGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export const ToDoListItem = ({ id, title, status }) => {
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
        <Trash color="red" />
      </td>
    </tr>
  );
};
