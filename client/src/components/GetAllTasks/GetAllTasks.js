import "./GetAllTasks.css";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';



function GetAllTasks({tasks, showTasks, loading, saveTaskByID}) {
    // const [tasks, setTasks] = useState([]);
    // const [showTasks, setShowTasks] = useState(true);
    // const [loading, setLoading] = useState(false);

    // Function to get all tasks when page loads
    // useEffect(() => {
    //     async function showData() {
    //         setTasks(await apiFunction.getTasks());
    //         setShowTasks(true);
    //     }
    //     showData();
    //     if (!showData && !console.error()) {
    //       setLoading(false);
    //   }
    //     }, []);
    
    // Function to save task details in state by id for edit task

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
            <table className = "get-all-table">
            <thead>
            <tr className="tasks">
                <th>Title</th>
                <th>Content</th>
                <th>Date Created</th>
                <th>Deadline</th>
                <th>Unique ID</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {tasks && tasks.map((task) => (
                
                <tr key={task.id} className="tasks" id={task.id}>
                    
                    <td className= "task-title" value={task.title}>{task.title}</td>
                    <td className= "task-content">{task.content}</td>
                    <td className= "task-date">{task.date.split("T")[0].split("-").reverse().join("-")}</td>
                    <td className= "task-deadline">{task.deadline.split("T")[0].split("-").reverse().join("-")}</td>
                    <td className="id">{task.id}</td>
                    <td className="task-status">{task.active.toString()}</td>
                    <td className="task-actions">
                        <NavLink id={task.id} onClick={() => saveTaskByID(task.id)} to={`/${task.id}`} className="edit-task-link">
                        <FontAwesomeIcon icon={icon({name: 'pen-to-square'})} style={{color:"#5e81e8"}}/>
                        </NavLink>
                        <NavLink to={`/deletetask/${task.id}`} className="delete-task-link">
                        <FontAwesomeIcon icon={icon({name: 'trash'})} style={{color:"#d41111"}} />
                        </NavLink>
                    </td>
                </tr>
            ))}
            </tbody>
            </table>
            ) :null}
        </div>
        
    )
}

export default GetAllTasks;