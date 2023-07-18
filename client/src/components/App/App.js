import "./App.css";
import { useState, useEffect } from "react";
import GetAllTasks from "../GetAllTasks/GetAllTasks";
import CreateTask from "../CreateTask/CreateTask";
import * as apiFunction from "../../api/api.js";
import {Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Submit");
 
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
    event.preventDefault();
    const { title, content, deadline } = event.target.elements;
    const details = {
    title: title.value,
    content: content.value,
    deadline: deadline.value,
    };
    try {
      const response = await apiFunction.createTask(details);
      setStatus("Submit");
      if (response) {
        console.log("Task created successfully!");
      } else {
        console.error("Create task failed:", response);
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
    />}
    ></Route>
    <Route path="/addtask" element={<CreateTask 
    handlesubmit={handlesubmit}
    status={status}
     />}></Route>
    </Routes>
    </div>
  )  
}

export default App;