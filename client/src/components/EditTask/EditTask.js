import {useState} from "react";
// import * as apiFunction from "../../api/api.js";

function EditTask({handleEditSubmit, taskById, editStatus,checkUncheckBox}) {
    const [editedTask, setEditedTask] = useState({title: taskById.title , content: taskById.content, deadline: taskById.deadline, active: taskById.active})
    // const [taskById, setTaskById] = useState({})
    console.log(editedTask)

    // Function to save task details in state by id for edit task

// async function saveTaskByID(id) {
//     const task = await apiFunction.getTaskByID(id);
//     console.log(id);
//     // map through tasks and find task by id
//     for (let i = 0; i < tasks.length; i++) {
//       console.log(tasks[i].id);
//       console.log(id);
//       if (tasks[i].id === id) {
//         console.log("task by id:", tasks[i])
//         setEditedTask(tasks[i]);
//         console.log(editedTask);
//         break;
//       }
//   }
//     console.log(task);
  
//   }

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
                        onChange={(event) => setEditedTask({...editedTask, content: event.target.value })} placeholder={editedTask.content}
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