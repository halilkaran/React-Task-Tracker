import "../addTask/AddTask.css";
import "./Task.css";

function Tasks({ todos }) {
  const deleteBtns = (e) => {
    e.target.parentNode.remove();
  };

  const chckBtns = (e) => {
    if (e.target.previousElementSibling.className !== "liIDchck") {
      e.target.previousElementSibling.className = "liIDchck";
    } else {
      e.target.previousElementSibling.className = "liID";
    }
  };

  return (
    <div id="fadeInID">
      {todos.map((data, i) => {
        return (
          <div id="listCon" key={i}>
            <div className="liID">
              •&nbsp;&nbsp; {data.taske} &nbsp; {data.time}
            </div>
            <div onClick={chckBtns} id="checkID">
              ✔
            </div>
            <div onClick={deleteBtns} id="delID">
              ✖
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Tasks;
