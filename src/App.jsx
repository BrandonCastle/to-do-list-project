import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { InputForm } from "./InputForm";
import { Task } from "./Task";
import { Form } from "./Form";

function App() {

  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <Header />
      <Task />
      <InputForm showForm={showForm} setShowForm={setShowForm} />
      {showForm && <Form setShowForm={setShowForm}></Form>}
    </>
  );
}

export default App;
