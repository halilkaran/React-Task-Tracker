import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

function Header({addTask}) {
  const [show, setShow] = useState(false);

  const handleBtnClick = () => {
    setShow(!show);
  };
  return (
    <div className="header">
      <h1>TASK TRACKER</h1>
      <button className="btn"
        /*style={
          show ? { backgroundColor: "red" } : { backgroundColor: "purple" }
        }</div>*/
        onClick={handleBtnClick}
      >
    
        {show ? "Close Add Task Bar" : "Show Task Bar"}
      </button>
      {show && <AddTaskForm  addTask={addTask}/>}
    </div>
  );
}

export default Header;
