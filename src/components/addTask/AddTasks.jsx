import "./AddTask.css";
function AddTasks({ todos, setTodos }) {
  const addbar = (e) => {

    
      let a =
        e.target.parentNode.parentNode.querySelector("#name").value ;
      let b = e.target.parentNode.parentNode.querySelector("#Day-time").value;
    if (a && b) {
      setTodos([...todos, { taske: a, time: b }]);
    }
  
   
     
  };

  return (
     
     
          <div className="form" id="form1">
            <p className="Task">
              <input
                name="Task"
                type="text"
                className="feedback-input"
                placeholder="Task"
                id="name"
              />
            </p>

            <p className="time">
        <input
        
                name="Day-time"
                type="date"
                className=" feedback-input"
                id="Day-time"
                placeholder="Day & Time"
              />
            </p>

            <div className="submit">
              <button   onClick={addbar} className="btnn ">
                <span>Save Task </span>
              </button>
              <div className="ease"></div>
            </div>
          </div>
      
  );
}

export default AddTasks;
