import {useState} from "react";
import "./GetAllTasks.css"

function GetAllTasks() {
    const [tasks, setTasks] = useState([]);
    const [showTasks, setShowTasks] = useState(false);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            const response = await fetch("api/tasks");
            if (!response.ok) {
                throw new Error ("Request failed!");
            }
            const data = await response.json();
            setShowTasks(true);
            setTasks(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    function handleHideTasks() {
        setShowTasks(false);
    };

    return (
        <div className = "get-all-container">
            <button className="get-all-buttons" onClick={fetchData}>Show Tasks</button>
            <button className="get-all-buttons" onClick={handleHideTasks}>Hide Tasks</button>
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
            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                
                <tr key={task.id} className="tasks">
                    <td className= "task-date">{task.date.split("T")[0].split("-").reverse().join("-")}</td>
                    <td className= "task-title">{task.title}</td>
                    <td className= "task-content">{task.content}</td>
                    <td className= "task-deadline">{task.deadline.split("T")[0].split("-").reverse().join("-")}</td>
                </tr>
            ))}
            </tbody>
            </table>
            ) :null}
        </div>
    )
}

export default GetAllTasks;