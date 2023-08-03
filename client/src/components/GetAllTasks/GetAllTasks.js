import "./GetAllTasks.css";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import ReactPaginate from "react-paginate";
import { useAuthContext } from "../../context/AuthProvider.js";


function GetAllTasks({
    tasks, 
    showTasks, 
    loading, 
    saveTaskByID, 
    openModal,
    totalPages,
    currentPage,
    handlePageChange,
    currentTasks,
}) 
    {
    const { handleLogout } = useAuthContext();

    const handleButtonClick = (id) => {
        saveTaskByID(id);
        openModal();
    };

    const hasTasks = tasks.length > 0;

    const handleLogoutClick = () => {
        handleLogout();
      };
 
    return (
        <div className = {`get-all-container ${hasTasks ? '' : 'create-task-large-container'}`}>
            <NavLink to="/login" onClick={handleLogoutClick}
            >Logout</NavLink>
    
        <div className="header-container" >
        <h1 className="task-list-title">Task Lists</h1>
        {/* <button className={`create-task-button ${hasTasks ? '' : 'create-task-large-button'}`}> */}
        <NavLink to="/addtask" className={`create-task-link create-task-button ${hasTasks ? '' : 'create-task-large-button'}` }>Add New Task</NavLink>
        {/* </button> */}
        </div>
            {loading ? (
                <div className="loading-container">
                <p className="loading-message">Loading...</p>
                </div>
            ) :showTasks ? (
                tasks.length === 0 ? (
            <div className="loading-error-container">
            <p className="no-tasks-message">No tasks found.</p>
            </div>
        ) : (
            <table className = "get-all-table">
            <thead className="tasks-titles">
            <tr >
                <th className= "task-title">Title</th>
                <th className= "task-content">Content</th>
                <th className="dates">Date Created</th>
                <th className="dates">Deadline</th>
                <th className="unique-id">Unique ID</th>
                <th className="task-status">Status</th>
                <th className="task-actions">Actions</th>
            </tr>
            </thead>

           
            <tbody>
            {currentTasks && currentTasks.map((task) => (
                
                <tr key={task.id} className="tasks" id={task.id}>
                    
                    <td className= "task-title" value={task.title}>{task.title}</td>
                    <td className= "task-content">{task.content}</td>
                    <td className= "task-date dates">{task.date.split("-").reverse().join("-")}</td>
                    <td className= "task-deadline dates">{task.deadline.split("-").reverse().join("-")}</td>
                    <td className="id unique-id">{task.id}</td>
                    <td className="task-status"><p className={task.status ? `task-active` : `task-inactive`}>{task.status ? 'Active' :  'Inactive'}</p></td>
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
            <ReactPaginate
                breakLabel={"..."}
                nextLabel={">"}
                onPageChange={handlePageChange}
                pageCount={totalPages}
                currentPage={currentPage}
                currentTasks={currentTasks}
                pageClassName="page-link"
                containerClassName={"pagination-container"}
                activeClassName={"active-page"}
                previousLabel={"<"}
                renderOnZeroPageCount={null}
                previousClassName={"previous-button"}
                nextClassName={"next-button"}
                forcePage = {currentPage}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
             />
        </div>
        
    )
}

export default GetAllTasks;