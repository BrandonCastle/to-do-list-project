import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import { InputForm } from "./InputForm";
import { Task } from "./Task";
import { Form } from "./Form";

function App() {

  const [showForm, setShowForm] = useState(false)
  const [toDoList, setToDoList] = useState([]);

useEffect(() => {
  console.log(toDoList)
}, [toDoList])
  return (
    <>
      <Header />
      <Task toDoList={toDoList} />
      <InputForm showForm={showForm} setShowForm={setShowForm} />
      {showForm && <Form setToDoList={setToDoList} setShowForm={setShowForm}></Form>}
    </>
  );
}

export default App;
