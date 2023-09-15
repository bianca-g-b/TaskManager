import React from "react";
import "./GetAllTasks.css";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import ReactPaginate from "react-paginate";



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
    const handleButtonClick = (id) => {
        saveTaskByID(id);
        openModal();
    };
    const hasTasks = tasks.length > 0;

 
 
    return (
        <div className = {`get-all-container ${hasTasks ? '' : 'create-task-large-container'}`}>
        <div className={`header-container ${hasTasks ? '' : 'no-tasks-header-container'}`} >
        <h1 className={`task-list-title ${hasTasks ? '' : 'hide-title'}`}>Tasks List</h1>
        <NavLink to="/tasks/addtask" className={`create-task-link create-task-button ${hasTasks ? '' : 'create-task-large-button'}` }>Add New Task</NavLink>
        </div>
            {loading ? (
                <div className="loading-container">
                <p className="loading-message">Loading...</p>
                </div>
            ) :showTasks ? (
                tasks.length === 0 ? (
            <div className="loading-error-container">
            <p className="no-tasks-message">No tasks found</p>
            </div>
        ) : (
            <table className = "get-all-table">
            <thead className="tasks-titles">
            <tr >
                <th className="unique-id">Task</th>
                <th className= "task-title">Title</th>
                <th className= "task-content">Content</th>
                <th className="dates">Date Created</th>
                <th className="dates">Deadline</th>
                <th className="task-status">Status</th>
                <th className="task-actions action-title">Actions</th>
            </tr>
            </thead>
            <tbody>
            {currentTasks && currentTasks
            .map((task, index ) => (
                <tr key={task.id} className="tasks" id={task.id}>
                    <td className="id unique-id">{currentPage && currentPage > 0 ? (currentPage * 10 )+ index+1 : index+1 }</td>
                    <td className= "task-title" value={task.title}>{task.title}</td>
                    <td className= "task-content">{task.content}</td>
                    <td className= "task-date dates">{task.date.split("-").reverse().join("-")}</td>
                    <td className= "task-deadline dates">{task.deadline.split("-").reverse().join("-")}</td>       
                    <td className="task-status"><p className={task.status ? `task-active` : `task-inactive`}>{task.status ? 'Active' :  'Inactive'}</p></td>
                    <td className="task-actions">
                    <div className="edit-task-button-container">
                        <NavLink 
                        id={`edit-task-${task.id}`} 
                        onClick={() => saveTaskByID(task.id)} 
                        to={`/tasks/${task.id}`}
                        aria-label="Edit Task" 
                        className="edit-task-link">
                        <FontAwesomeIcon className="edit-symbol" icon={icon({name: 'pen-to-square'})} style={{fontSize:"1.5em"}}/>
                        </NavLink>
                        <button 
                        onClick={ () => handleButtonClick(task.id)}
                        className="delete-icon"
                        id={`delete-task--${task.id}`}
                        aria-label="Delete Task"
                        >
                        <FontAwesomeIcon className="delete-symbol" icon={icon({name: 'trash'})} style={{ fontSize:"1.5em"} } />
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