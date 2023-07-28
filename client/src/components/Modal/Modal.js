function Modal({isModalOpen, handleDelete, closeModal}) {
    if (!isModalOpen) return null;
    return(
        <div className="modal">
            <div className="modal-div">
            <h2>Delete Task</h2>
            <p>Are you sure you want to permanently delete this task?</p>
            <div className="modal-buttons-container">
            <button className="modal-button" onClick={closeModal}>Cancel</button>
            <button className="modal-button" onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
    )
}

export default Modal;