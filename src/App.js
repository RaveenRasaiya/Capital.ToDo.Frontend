import React from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { NewToDoModal } from "./components/ToDoModal";

function App() {
  return (
    <div className="App">
      <h3>To Do List</h3>

      <div style={{ maxWidth: "90%", margin: "auto" }}>
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <NewToDoModal />
        </div>

        <ToDoList />
      </div>
    </div>
  );
}

export default App;
