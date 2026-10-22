import "./InputForm.css";
import {useState} from 'react'


export function InputForm( {showForm, setShowForm, setDeleteMode, deleteMode}) {


  const displayForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const deleteForm = () => {
    if (deleteMode) {
      setDeleteMode(false);
    } else {
      setDeleteMode(true);
    }
    console.log(deleteMode)
  }

  return (
    <>
      <div className="input-form-container"> 
        <button onClick={deleteForm} className="input-form-delete">Delete</button>
        <button onClick={displayForm} className="input-form-button">
          Add
        </button>
      </div>
    </>
  );
}
