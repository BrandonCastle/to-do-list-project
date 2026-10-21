import "./Form.css";

export function Form({ setShowForm }) {
  return (
    <div className="backdrop">
      <div className="form-container">
        <h1 className="form-header">Insert To-Do</h1>
        <textarea placeholder="insert to do list here..."className="form-input"></textarea>
        <div className="form-button-container">
          <button
            className="form-button"
            onClick={() => {
              setShowForm(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
