import {useState} from 'react'

import Header from '../components/Header'
import ShowTasks from '../components/ShowTasks'
import data from "../helper/starterData"
function Home() {
    const [tasks, setTasks] = useState(data)
    const addTask = (newTask) => {
        const id = new Date().getTime();
        const addNewTask = { id:id, ...newTask }
        setTasks([...tasks, addNewTask])
    }
    const toogleDone = (id) => {
    setTasks(tasks.map((task) => task.id===id ?{...task,isDone:!task.isDone }:task  )
        )
    }
    const deleteTask = (id) => {
        setTasks(
          tasks.filter((task) =>
            task.id !== id 
          )
        );
    };


  return (
      <div>
          <Header addTask={addTask} />
        {tasks.length > 0 ?  <ShowTasks tasks={tasks} toogleDone={toogleDone} deleteTask={deleteTask} /> :  <p> No Task To Show</p> }
         
      </div>
  )
}

export default Home