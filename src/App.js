import "./App.css"
import { React, useState } from "react";
 
import Header from "./components/header/Header";
import AddTasks from "./components/addTask/AddTasks";
function App() {
  const [toggle, setToggle] = useState(false);

    const getbtn = () => {
      setToggle(!toggle);
    };
  return (
    <>
      <Header />
      <button onClick={getbtn} className="btnn ">
        {!toggle ? (
          <span>SHOW ADD TASK BAR</span>
        ) : (
          <span>CLOSE ADD TASK BAR</span>
        )}
      </button>

      {toggle && <AddTasks />}
    </>
  );
}
export default App;
