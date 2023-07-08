import {useState} from "react";
import "./GetAllTasks.css";
import * as apiFunction from "../../api/api.js";

function GetAllTasks() {
    const [tasks, setTasks] = useState([]);
    const [showTasks, setShowTasks] = useState(false);
    const [loading, setLoading] = useState(false);
  
    async function showData() {
        setTasks(await apiFunction.getTasks());
        setShowTasks(true);
    }

    function handleHideTasks() {
        setShowTasks(false);
    };

    if (!showData && !console.error()) {
        setLoading(false);
    }

    return (
        <div className = "get-all-container">
        <div className="buttons-container">
            <button className="get-all-buttons" onClick={showData}>Show Tasks</button>
            <button className="get-all-buttons" onClick={handleHideTasks}>Hide Tasks</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) :showTasks ? (
            <table className = "get-all-table">
            <thead>
            <tr className="tasks">
                <th>Created</th>
                <th>Title</th>
                <th>Content</th>
                <th>Deadline</th>
                <th>Unique ID</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                
                <tr key={task.id} className="tasks">
                    <td className= "task-date">{task.date.split("T")[0].split("-").reverse().join("-")}</td>
                    <td className= "task-title">{task.title}</td>
                    <td className= "task-content">{task.content}</td>
                    <td className= "task-deadline">{task.deadline.split("T")[0].split("-").reverse().join("-")}</td>
                    <td className="id">{task.id}</td>
                    <td className="task-status">{task.active.toString()}</td>
                </tr>
            ))}
            </tbody>
            </table>
            ) :null}
        </div>
    )
}

export default GetAllTasks;