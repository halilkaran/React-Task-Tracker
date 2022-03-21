import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: text, day: day, isDone: false });
    setText("");
    setDay("");
  };

  return (
    <div className="form-main">
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label htmlFor="task">Task Name:</label>
          <input
            className="feedback-input"
            required
            type="text"
            name="text"
            id="task"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label htmlFor="day">Day & Time</label>
          <input
            
            className="feedback-input"
            required
            type="date"
            name="day"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskForm;
