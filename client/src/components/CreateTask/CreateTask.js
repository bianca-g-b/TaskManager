import { useState } from "react";

function CreateTask({handlesubmit, status}) {
    const [newTask, setNewTask] = useState({ title: "", content: "", deadline: "" });
   
    return (
        <form onSubmit={handlesubmit} className="add-task-form" >
            <h2 className="add-task-title">Add New Task</h2>
            <div className="add-task-input-fields">
                <div className="form-component">
                    <label htmlFor="title">Title of Task</label>
                    <input value={newTask.title}
                            onChange={(event) => setNewTask({ ...newTask, title: event.target.value })} 
                            type="text" id="title" 
                            placeholder="Input title of task" 
                            required />
                </div>
                <div className="form-component">
                    <label htmlFor="content">Content</label>
                    <input value={newTask.content}
                            onChange={(event)=> setNewTask({...newTask, content: event.target.value })} 
                            type="text" 
                            id="content" 
                            placeholder="Input content of task" 
                            required />
                </div>
                <div className="form-component"></div>
                <label htmlFor="deadline">End Date</label>
                <input value={newTask.deadline}
                        onChange={(event) => setNewTask({...newTask, deadline: event.target.value})}
                        type="date" 
                        id="deadline"
                        required />
            </div>
            <div className="add-task-submit-button">
            <button type="submit" className="form-button">{status}</button>
            </div>
        </form>
    )
}

export default CreateTask;