import "./EditTask.css";
import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

function EditTask({handleEditSubmit, taskById, editStatus, currentPage}) {
    // console.log("editTask task by id: ",taskById)
    
    const todayDate = new Date().toISOString()

    if (taskById && taskById.deadline !== undefined) {
        const momentDeadline = moment(taskById.deadline, "YYYY-MM-DD").locale("en-GB");
        taskById.deadline = momentDeadline.format("YYYY-MM-DD");
        // console.log("taskById.deadline: ",taskById.deadline) 
    } else {
        console.log("taskById.date is undefined")
    }

    const [editedTask, setEditedTask] = useState({
        title: taskById.title || '',
        content: taskById.content || '',
        deadline: taskById.deadline || todayDate,
        status: taskById.status || true,
        id: taskById.id || 0
    })
    // console.log("editedTask: ",editedTask)

    // Wrap setEditedTask in a useEffect hook to update when taskById changes
    useEffect(() => {
        setEditedTask({title: taskById.title , content: taskById.content, deadline: taskById.deadline, status: taskById.status, id: taskById.id})
    }, [taskById])

    // console.log("editedTask2: ",editedTask)

    return(  
        <form onSubmit={handleEditSubmit} className="edit-task-full-form" >
        <div className="back-to-all-tasks-container">
            <NavLink to={`/tasks/?page=${currentPage}`} className="back-to-all-tasks-link">&#8701; Back to Tasks</NavLink>
        </div>
            <h1 className="edit-task-title">Edit Task</h1>
            <div className = "edit-task-form">
                <div className="form-component">
                    <label htmlFor="title">Title of Task</label>
                    <input
                        className="edit-title-input"
                        key={taskById.title}
                        value={editedTask.title}
                        onChange={(event) => setEditedTask({ ...editedTask, title: event.target.value })}
                        type="text" id="title" 
                    />
                </div>
                <div className="form-component">
                    <label htmlFor="content">Content</label>
                    <textarea
                        className="edit-content-input"
                        key={taskById.content}
                        value={editedTask.content}
                        onChange={(event) => setEditedTask({...editedTask, content: event.target.value })}
                        type="text" id="content"
                        rows="5"
                    />
                </div>
                <div className="form-component">
                    <label htmlFor="deadline">End Date</label>
                    <input 
                        className="edit-deadline-input"
                        key={taskById.deadline}
                        value={editedTask.deadline} 
                        onChange={(event) => setEditedTask({...editedTask, deadline: event.target.value})}
                        type="date" id="deadline"
                    />
                    
                </div>
                <div className="mark-as-checkbox">
                    <label htmlFor="status">Mark as done</label>
                    <input
                        className="edit-completed-input"
                        value={editedTask.status}
                        checked={!editedTask.status}
                        onChange={(event) => setEditedTask({...editedTask, status: !event.target.checked})}
                        type="checkbox" id="status"
                    />
                </div>
                <div className="edit-task-button-container">
                    <button type="submit" className="edit-task-button">{editStatus}</button>
                </div>
            </div>
        </form>
        
    )
}

export default EditTask;