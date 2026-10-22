export function EachTask( {deleteMode, eachtask, toDoList, setToDoList}) {

    const deleteTask = () => {
       const selectedTaskId = eachtask.Id
       const updatedToDoList = toDoList.filter((x) => {return x.Id !== selectedTaskId})
       setToDoList(updatedToDoList)
    }
    

    return (
         <div key={crypto.randomUUID()} className="task-container">
            <p className="task">{eachtask.Task}</p>
            {deleteMode ? (
              <input className="task-checkbox" type="checkbox"></input>
            ) : (
              <button onClick={deleteTask} className="task-delete-button">
                -
              </button>
            )}
          </div>
    )
}