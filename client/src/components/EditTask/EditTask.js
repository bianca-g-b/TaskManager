import {useState} from "react";

function EditTask({handleEditSubmit, taskByID, editStatus,checkUncheckBox}) {
    const [editedTask, setEditedTask] = useState({title: taskByID.title , content: taskByID.content, deadline: taskByID.deadline, active: taskByID.active})
    console.log(editedTask)

    return(
        <form onSubmit={handleEditSubmit} className="edit-task-form-area">
            <h2 className="edit-task-title">Edit Task</h2>
            <div className = "edit-task-input-fields">
                <div className="form-component">
                    <label htmlFor="title">Title of Task</label>
                    <input value={editedTask.title}
                        onChange={(event) => setEditedTask({ ...editedTask, title: event.target.value })} 
                        type="text" id="title" 
                    />
                </div>
                <div className="form-component">
                    <label htmlFor="content">Content</label>
                    <input value={editedTask.content}
                        onChange={(event) => setEditedTask({...editedTask, content: event.target.value })}
                        type="text" id="content"
                    />
                </div>
                <div className="form-component">
                    <label htmlFor="deadline">End Date</label>
                    <input value={editedTask.deadline} 
                        onChange={(event) => setEditedTask({...editedTask, deadline: event.target.value})}
                        type="date" id="deadline"
                    />
                </div>
                <div className="mark-as-checkbox">
                    <label htmlFor="status">Mark as done</label>
                    <input value={editedTask.active}
                        // ref={ref}
                        onChange={checkUncheckBox}
                        type="checkbox" id="status"
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