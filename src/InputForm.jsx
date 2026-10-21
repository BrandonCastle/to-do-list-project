import "./InputForm.css";


export function InputForm( {showForm, setShowForm}) {


  const displayForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
    console.log(showForm);
  };
  return (
    <>
      <div className="input-form-container"> 
        <button onClick={displayForm} className="input-form-button">
          Add
        </button>
      </div>
    </>
  );
}
