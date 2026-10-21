import "./Task.css";

export function Task({ toDoList }) {
  return (
    <>
      {toDoList.map((task) => {
        return (
          <>
            <div className="task-container">
              <p className="task">{task.Task}</p>
              <input className="task-checkbox" type="checkbox"></input>
            </div>
          </>
        );
      })}
    </>
  );
}
