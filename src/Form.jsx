import "./Form.css";
import { useState } from "react";

export function Form({ setShowForm, setToDoList }) {
  const [text, setText] = useState("");

  const insertToDo = () => {
    setToDoList((current) => [...current, {Task: text}])
    setShowForm(false);
  };

  const retrieveText = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="backdrop">
      <div className="form-container">
        <h1 className="form-header">Insert To-Do</h1>
        <textarea
          value={text}
          onChange={retrieveText}
          placeholder="insert to do list here..."
          className="form-input"
        ></textarea>
        <div className="form-button-container">
          <button className="form-button" onClick={insertToDo}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
