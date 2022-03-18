import {React, useState} from "react";
import "./AddTask.css"
function AddTasks() {





const [task, setTask] = useState([])
    const addbar = (e) => {
        e.preventDefault()
        let a = e.target.parentNode.parentNode.querySelector("#name").value;
        let b = e.target.parentNode.parentNode.querySelector("#Day-time").value;
        setTask([...task, { taske:a , time: b} ])
        e.target.parentNode.parentNode.querySelector("#name").value=""
        e.target.parentNode.parentNode.querySelector("#Day-time").value=""
}

  
  const deleteBtns =(e)=>  {
    
      e.target.parentNode.remove();
    };
  
  const chckBtns = (e) => {
    
    if ((e.target.previousElementSibling.className !== "liIDchck")) {
      e.target.previousElementSibling.className = "liIDchck";
    } else {
      e.target.previousElementSibling.className = "liID";
    }
      
 }


  
  
  


    return <div className="container  text-center mt-4  ">
<div id="form-main">
  <div id="form-div">
    <form className="form" id="form1">
      
      <p className="Task">
        <input name="Task" type="text" className="feedback-input" placeholder="Task" id="name" />
      </p>
      
      <p className="time">
        <input name="Day-time" type="text" className=" feedback-input" id="Day-time" placeholder="Day & Time" />
      </p>
      
      
      
      <div className="submit">
        <button type="submit" onClick={addbar} className="btnn "> <span>Save Task </span> </button>
              <div className="ease"></div>

              <div  id="listCon">
{ task.map((data) => {  
                    return (
                      <>
                        <div id="fadeInID">
                          <div className="liID">
                            •&nbsp;&nbsp; {data.taske} {data.time}
                          </div>
                          <div onClick={chckBtns} id="checkID">
                            ✔
                          </div>
                          <div onClick={deleteBtns} id="delID">
                            ✖
                          </div>
                        </div>
                      </>
                    );  
                   
                   
                })}
 </div>
      </div>
    </form>
  </div>

</div>
  
        
    </div>
}

export default AddTasks;
