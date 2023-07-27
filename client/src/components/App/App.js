import "./App.css";
import { useState, useEffect} from "react";
import * as apiFunction from "../../api/api.js";
import {Routes, Route } from "react-router-dom";
import GetAllTasks from "../GetAllTasks/GetAllTasks";
import CreateTask from "../CreateTask/CreateTask";
import EditTask from "../EditTask/EditTask";


function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Submit"); // for create task
  const [editStatus, setEditStatus] = useState("Edit") // for edit task
  const [id2, setId] = useState(null); // for edit task ???
  const [taskById, setTaskById] = useState({}); // for edit task

  // Function to get all tasks when page loads
  useEffect(() => {
    async function showData() {
        setTasks(await apiFunction.getTasks());
        setShowTasks(true);
    }
    showData();
    if (!showData && !console.error()) {
        setLoading(false);
  }
  }, []);

 
  // Handle submit function for CreateTask component
  async function handlesubmit(event) {
    console.log(event);
    event.preventDefault();
    const { title, content, deadline } = event.target.elements;
    const details = {
    date: new Date().toISOString(),
    title: title.value,
    content: content.value,
    deadline: deadline.value,
    completed: false
    };
    try {
      const response = await apiFunction.createTask(details); 
      if (response) {
        console.log("Task created successfully!");
        setStatus("Added!");
      } else {
        console.error("Create task failed:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
}

// Function to save task details in state by id for edit task
async function saveTaskByID(id) {
  const task = await apiFunction.getTaskByID(id);
  console.log(id);
  
  // map through tasks and find task by id
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].id);
    console.log(id);
    if (tasks[i].id === id) {
      console.log("task by id:", tasks[i])
      setTaskById(tasks[i]);
      setId(tasks[i].id)
      break;
    }
}
  console.log(task);
  console.log(taskById)
  console.log(id2)
}


//Function to handle edit submit
async function handleEditSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(id2);
  const { title, content, deadline, completed } = event.target.elements;
  const details = {
    title: title.value,
    content: content.value,
    deadline: (new Date(deadline.value)).toISOString(),
    completed: completed.checked,
  };
  console.log("details:",details);
  console.log(typeof(deadline.value));
  const id = id2;
  console.log("id:",id);
  console.log(details);
  try {
    const response = await apiFunction.editTask(id, details);
    if (response) {
      console.log("Task edited successfully!");
      setEditStatus("Edited!");
    } else {
      console.error("Edit task failed:", response);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

  return (
    <div className="testing-app">
    <div className="buttons-container">
    </div>
    <Routes>
      <Route path="/" element={<GetAllTasks 
          tasks={tasks}
          showTasks={showTasks}
          loading={loading}
          saveTaskByID={saveTaskByID}/>}>  
      </Route>
      <Route path="/addtask" element={<CreateTask 
          handlesubmit={handlesubmit}
          status={status}/>}>
      </Route>
      <Route path="/:id" element={<EditTask
          tasks={tasks}
          taskById={taskById}
          handleEditSubmit={handleEditSubmit}
          editStatus={editStatus}/>}>
      </Route>
    </Routes>
    </div>
  )  
}

export default App;