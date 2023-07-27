import {useState, useEffect} from "react";
// import * as apiFunction from "../../api/api.js";
import moment from "moment";

function EditTask({handleEditSubmit, taskById, editStatus}) {
    console.log("editTask task by id: ",taskById)
    
    if (taskById && taskById.deadline !== undefined) {
        console.log(taskById.deadline);
        // taskById.deadline = new Intl.DateTimeFormat("en-GB").format(new Date(taskById.deadline.split("T")[0]));
        // taskById.deadline = moment(taskById.deadline).format("YYYY-MM-DD");
        const momentDeadline = moment(taskById.deadline, "YYYY-MM-DD").locale("en-GB");
        taskById.deadline = momentDeadline.format("YYYY-MM-DD");
        console.log("taskById.deadline: ",taskById.deadline) 
    } else {
        console.log("taskById.date is undefined")
    }

    const [editedTask, setEditedTask] = useState({
        title: taskById.title || '',
        content: taskById.content || '',
        deadline: taskById.deadline || '',
        active: taskById.active || false ,
        id: taskById.id || ''
    })
    console.log("editedTask: ",editedTask)

    // Wrap setEditedTask in a useEffect hook to update when taskById changes
    useEffect(() => {
        setEditedTask({title: taskById.title , content: taskById.content, deadline: taskById.deadline, active: taskById.active, id: taskById.id})
    }, [taskById])

    console.log("editedTask2: ",editedTask)

    return(
        
        <form onSubmit={handleEditSubmit} className="edit-task-form-area" >
            <h2 className="edit-task-title">Edit Task</h2>
            <div className = "edit-task-input-fields">
                <div className="form-component">
                    <label htmlFor="title">Title of Task</label>
                    <input
                        key={taskById.title}
                        value={editedTask.title}
                        onChange={(event) => setEditedTask({ ...editedTask, title: event.target.value })}
                        type="text" id="title" 
                    />
                </div>
                <div className="form-component">
                    <label htmlFor="content">Content</label>
                    <input
                        key={taskById.content}
                        value={editedTask.content}
                        onChange={(event) => setEditedTask({...editedTask, content: event.target.value })}
                        type="text" id="content"
                    />
                </div>
                <div className="form-component">
                    <label htmlFor="deadline">End Date</label>
                    <input 
                        key={taskById.deadline}
                        value={editedTask.deadline } 
                        onChange={(event) => setEditedTask({...editedTask, deadline: event.target.value})}
                        type="date" id="deadline"
                    />
                    
                </div>
                <div className="mark-as-checkbox">
                    <label htmlFor="active">Mark as done</label>
                    <input
                        key={!editedTask.active} 
                        defaultChecked={!editedTask.active || !taskById.active}
                        value= {editedTask.active}
                        onChange={(event) => setEditedTask({...editedTask, active: !event.target.checked})}
                        // onChange={checkUncheckBox}
                        type="checkbox" id="active"
                    />
                </div>
                <div className="add-task-submit-button">
                    <button type="submit" className="form-button">{editStatus}</button>
                </div>
            </div>
        </form>
        
    )
}

export default EditTask;