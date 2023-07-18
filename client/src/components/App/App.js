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
  async function handlesubmit() {
    setStatus("Loading...");
    let result = await apiFunction.createTask();
    setStatus("Submit");
    alert(result.status);

}
  // Function to hide all tasks
  // function handleHideTasks() {
  //     setShowTasks(false);
  // };

// Set loading to false if data doesn't show and there is no error
  // if (!showData && !console.error()) {
  //     setLoading(false);
  // }

    // Function to update tasks and display them
//   async function handleUpdate() {
//     await apiFunction.updateTasks();
//     setTasks(await apiFunction.getTasks());
//     setShowTasks(true);
// }

  return (
    <div className="testing-app">
    <div className="buttons-container">
        {/* <button className="get-all-buttons" onClick={showData}>Show Tasks</button> */}
        {/* <button className="get-all-buttons" onClick={handleHideTasks}>Hide Tasks</button>
        <button className="get-all-buttons" onClick={handleUpdate}>Update Tasks</button> */}
    </div>
    <Routes>
    <Route path="/" element={<GetAllTasks 
    tasks={tasks}
    showTasks={showTasks}
    loading={loading}
    />}
    ></Route>
    <Route path="/addtask" element={<CreateTask 
    onSubmit={handlesubmit}
    status={status}
     />}></Route>
    </Routes>
    </div>
  )  
}

export default App;