import "./InputForm.css";


export function InputForm( {showForm, setShowForm}) {


  const displayForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };
  return (
    <>
      <div className="input-form-container"> 
        <button className="input-form-delete">Delete</button>
        <button onClick={displayForm} className="input-form-button">
          Add
        </button>
      </div>
    </>
  );
}
