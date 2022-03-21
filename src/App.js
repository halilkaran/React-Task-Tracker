import "./App.css"
import "./components/addTask/AddTask.css"
import { React, useState } from "react";
 
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import AddTasks from "./components/addTask/AddTasks";
function App() {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([]);

    const getbtn = () => {
      setToggle(!toggle);
    };
  return (
    <div className="contasks">
      <Header />
      <button onClick={getbtn} className="btnn ">
        {!toggle ? (
          <span>SHOW ADD TASK BAR</span>
        ) : (
          <span>CLOSE ADD TASK BAR</span>
        )}
      </button>
      <div className="container  text-center mt-4  ">
        <div id="form-main">
          <div id="form-div">
            {toggle && <AddTasks setTodos={setTodos} todos={todos} />}
            <div className="contask">
             <Tasks todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;



