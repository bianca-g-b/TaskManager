// import { useState } from "react";
// import * as apiFunction from "../../api/api.js";

function CreateTask({handlesubmit, status}) {
     
    return (
        <form className="add-task-form" handlesubmit={handlesubmit}>
            <h2 className="add-task-title">Add New Task</h2>
            <div className="add-task-input-fields">
                <div className="form-component">
                    <label htmlFor="title">Title of Task</label>
                    <input type="text" id="title" placeholder="Input title of task" required />
                </div>
                <div className="form-component">
                    <label htmlFor="content">Content</label>
                    <input type="text" id="content" placeholder="Input content of task" required />
                </div>
                <div className="form-component"></div>
                <label htmlFor="due-date">End Date (optional)</label>
                <input type="date" id="due-date" />
            </div>
            <div className="add-task-submit-button">
            <button type="submit" className="form-button">{status}</button>
            </div>
        </form>
    )
}

export default CreateTask;