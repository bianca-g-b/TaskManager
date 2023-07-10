import "./GetAllTasks.css";

function GetAllTasks({tasks, showTasks, loading}) {
    

    return (
        <div className = "get-all-container">
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