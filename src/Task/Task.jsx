import { EachTask } from "./EachTask";
import "./Task.css";
import { Fragment } from "react";

export function Task({ toDoList, deleteMode, setToDoList }) {
  return (
    <>
      {toDoList.map((eachtask) => {
        return (
          <Fragment key={crypto.randomUUID()}>
            <EachTask
              toDoList={toDoList}
              deleteMode={deleteMode}
              eachtask={eachtask}
              setToDoList={setToDoList}
            />
          </Fragment>
        );
      })}
    </>
  );
}
