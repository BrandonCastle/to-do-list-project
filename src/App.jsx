import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import { InputForm } from "./InputForm";
import { Task } from "./Task/Task";
import { Form } from "./Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toDoList, setToDoList] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <>
      <Header />
      <Task deleteMode={deleteMode} toDoList={toDoList} setToDoList={setToDoList} />
      <InputForm
        deleteMode={deleteMode}
        setDeleteMode={setDeleteMode}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {showForm && (
        <Form setToDoList={setToDoList} setShowForm={setShowForm}></Form>
      )}
    </>
  );
}

export default App;
