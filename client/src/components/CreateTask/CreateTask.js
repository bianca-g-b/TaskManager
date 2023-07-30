import { useState } from "react";
import "./CreateTask.css"

function CreateTask({handlesubmit, status}) {
    const [newTask, setNewTask] = useState({ title: "", content: "", deadline: "" });
   
    return (
        <form onSubmit={handlesubmit} className="add-task-full-form" >
            <h1 className="add-task-title">Add New Task</h1>
            <div className="add-task-form">
            {/* <div className="add-task-input-fields"> */}
                <div className="form-component">
                    <label htmlFor="title">Title of Task</label>
                    <input className="add-title-input"
                            value={newTask.title}
                            onChange={(event) => setNewTask({ ...newTask, title: event.target.value })} 
                            type="text" id="title" 
                            placeholder="Input title of task" 
                            required />
                </div>
                <div className="form-component">
                    <label htmlFor="content">Content</label>
                    <textarea className="add-content-input"
                            value={newTask.content}
                            onChange={(event)=> setNewTask({...newTask, content: event.target.value })} 
                            type="text" 
                            id="content" 
                            placeholder="Input content of task"
                            rows="5" 
                            required />
                </div>
                <div className="form-component">
                <label htmlFor="deadline">End Date</label>
                <input className="add-deadline-input"
                        value={newTask.deadline}
                        onChange={(event) => setNewTask({...newTask, deadline: event.target.value})}
                        type="date" 
                        id="deadline"
                        required />
                        </div>
            {/* </div> */}
            <div className="add-task-button-container">
            <button type="submit" className="add-task-button">{status}</button>
            </div>
            </div>
        </form>
    )
}

export default CreateTask;