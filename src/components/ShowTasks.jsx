import { FaTimesCircle } from "react-icons/fa";
 

function ShowTasks({tasks, toogleDone, deleteTask}) {
  return (
      <div className="con">
          {tasks.map((task) => {
              const {id, text, day,isDone} = task
              return (
                <div
                  className={`task${isDone ? "done" : ""}`}
                  key={id}
                  onDoubleClick={() => toogleDone(id)}
                >
                  <div>
                    <h3>{text}</h3>
                    <h6>{day}</h6>
                  </div>
                  <FaTimesCircle onClick={() => deleteTask(id)} />
                </div>
              );
      }
          )}
      </div>
  )
}

export default ShowTasks