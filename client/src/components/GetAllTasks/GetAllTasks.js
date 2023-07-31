import "./GetAllTasks.css";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


function GetAllTasks({
    tasks, 
    showTasks, 
    loading, 
    saveTaskByID, 
    openModal,

}) 
    {
    const handleButtonClick = (id) => {
        saveTaskByID(id);
        openModal();
    }
    console.log("tasks: ",tasks)

    return (
        <div className = "get-all-container">
        <div className="header-container">
        <h1 className="task-list-title">Task Lists</h1>
        <button className="create-task-button">
        <NavLink to="/addtask" className="create-task-link">Add New Task</NavLink>
        </button>
        </div>
            {loading ? (
                <p>Loading...</p>
            ) :showTasks ? (
                tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
            <table className = "get-all-table">
            <thead className="tasks-titles">
            <tr >
                <th className= "task-title">Title</th>
                <th className= "task-content">Content</th>
                <th className="dates">Date Created</th>
                <th className="dates">Deadline</th>
                <th className="unique-id">Unique ID</th>
                <th className="task-status">Completed</th>
                <th className="task-actions">Actions</th>
            </tr>
            </thead>

           
            <tbody>
            {tasks && tasks.map((task) => (
                
                <tr key={task.id} className="tasks" id={task.id}>
                    
                    <td className= "task-title" value={task.title}>{task.title}</td>
                    <td className= "task-content">{task.content}</td>
                    <td className= "task-date dates">{task.date.split("-").reverse().join("-")}</td>
                    <td className= "task-deadline dates">{task.deadline.split("-").reverse().join("-")}</td>
                    <td className="id unique-id">{task.id}</td>
                    <td className="task-status">{task.completed.toString()}</td>
                    <td className="task-actions">
                    <div className="edit-task-button-container">
                        <NavLink id={task.id} onClick={() => saveTaskByID(task.id)} to={`/${task.id}`} className="edit-task-link">
                        <FontAwesomeIcon icon={icon({name: 'pen-to-square'})} style={{color:"#5e81e8", fontSize:"1.5em"}}/>
                        </NavLink>
                        <button 
                        onClick={ () => handleButtonClick(task.id)}
                        className="delete-icon">
                        <FontAwesomeIcon icon={icon({name: 'trash'})} style={{color:"rgb(241, 99, 99)", fontSize:"1.5em"} } />
                        </button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
     
            </table>
        )
            ) :null}
        </div>
        
    )
}

export default GetAllTasks;