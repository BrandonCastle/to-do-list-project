import "./Task.css";
import {Fragment} from 'react'

export function Task({ toDoList }) {
  return (
    <>
      {toDoList.map((task) => {
        return (
          <Fragment key={crypto.randomUUID()}>
            <div  className="task-container">
              <p className="task">{task.Task}</p>
              <input className="task-checkbox" type="checkbox"></input>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
