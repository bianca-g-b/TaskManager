import "./App.css";
import { useState } from "react";
import GetAllTasks from "../GetAllTasks/GetAllTasks";
import * as apiFunction from "../../api/api.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [loading, setLoading] = useState(false);
 
  // Function to get all tasks
  async function showData() {
      setTasks(await apiFunction.getTasks());
      setShowTasks(true);
  }

  // Function to hide all tasks
  function handleHideTasks() {
      setShowTasks(false);
  };

// Set loading to false if data doesn't show and there is no error
  if (!showData && !console.error()) {
      setLoading(false);
  }

    // Function to update tasks and display them
  async function handleUpdate() {
    await apiFunction.updateTasks();
    setTasks(await apiFunction.getTasks());
    setShowTasks(true);
}

  return (
    <div className="testing-app">
    <div className="buttons-container">
        <button className="get-all-buttons" onClick={showData}>Show Tasks</button>
        <button className="get-all-buttons" onClick={handleHideTasks}>Hide Tasks</button>
        <button className="get-all-buttons" onClick={handleUpdate}>Update Tasks</button>
    </div>
    <GetAllTasks tasks={tasks} 
    showTasks={showTasks}
    loading={loading}
    />
    </div>
  )  
}

export default App;