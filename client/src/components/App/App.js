import "./App.css";
import { useState, useEffect} from "react";
import * as apiFunction from "../../api/api.js";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import GetAllTasks from "../GetAllTasks/GetAllTasks";
import CreateTask from "../CreateTask/CreateTask";
import EditTask from "../EditTask/EditTask";
import Modal from "../Modal/Modal.js";
import Login from "../Login/Login.js";
import PrivateRoute from "../../routes/PrivateRoute";
import {AuthProvider } from "../../context/AuthProvider.js";
import Homepage from "../Homepage/Homepage";


function App() {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Create Task"); // for create task
  const [editStatus, setEditStatus] = useState("Edit Task") // for edit task
  const [id2, setId] = useState(null); // for edit task and delete task
  const [taskById, setTaskById] = useState({}); // for edit task
  const [isModalOpen, setIsModalOpen] = useState(false); // for delete task
  const [createTaskTimer, setCreateTaskTimer] = useState(null); // for create task timer
  const [editStatusTimer, setEditStatusTimer] = useState(null); // for edit task status timer
  const [totalPages, setTotalPages] = useState(0) // for pagination
  const [currentPage, setCurrentPage] = useState(0) // for pagination
  const [currentTasks, setCurrentTasks] = useState([]) // for pagination
  const tasksPerPage = 10;
  const location = useLocation();
  const navigate = useNavigate();


  // Function to get all tasks when page loads or when location changes
  useEffect(() => {
      async function fetchData() {
        try {
          const response = await apiFunction.getTasks()
          setTasks(response);
          setShowTasks(true);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setLoading(false);
    }
  }
    fetchData();
    if (!fetchData && !console.error()) {
        setLoading(false);
  }
  }, [location]);

  // Use effect to update totalPages when tasks change
  useEffect(() => {
    setTotalPages(Math.ceil(tasks.length/10));
  // look at isFocused
  },[tasks])

 
  // Handle submit function for CreateTask component
  async function handlesubmit(event) {
    // console.log(event);
    event.preventDefault();
    const { title, content, deadline } = event.target.elements;
    const details = {
        date: new Date().toISOString(),
        title: title.value,
        content: content.value,
        deadline: deadline.value,
        status: true
    };
    try {
      const updatedTasks = await apiFunction.createTask(details); 
      if (updatedTasks) {
        console.log("Task created successfully!");
        setStatus("Added!");

        // Clear editStatusTimer if it exists
      if (createTaskTimer) {
        clearTimeout(createTaskTimer);
        }
        // Set editStatusTimer to clear editStatus after 2 seconds
        const timer = setTimeout(() => {
          setStatus("Create Task");
        }, 2000);
        // Set editStatusTimer
        setCreateTaskTimer(timer);

        setTasks(updatedTasks);
        // console.log(tasks);
      } else {
        console.error("Create task failed:", updatedTasks);
      }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to save task details in state by id for edit task
async function saveTaskByID(id) {
  // const task = await apiFunction.getTaskByID(id); // review code, cosider deleting
  // map through tasks and find task by id
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      console.log("task by id:", tasks[i])
      setTaskById(tasks[i]);
      setId(tasks[i].id)
      break;
    }
}
  // console.log(task);
}


//Function to handle edit submit
async function handleEditSubmit(event) {
  event.preventDefault();
  const { title, content, deadline, status } = event.target.elements;
  const details = {
    title: title.value,
    content: content.value,
    deadline: (new Date(deadline.value)).toISOString(),
    status: !status.checked,
  };
  const id = id2;
  try {
    const updatedTasks = await apiFunction.editTask(id, details);
    if (updatedTasks) {
      console.log("Task edited successfully!");
      setEditStatus("Edited!");

      // Clear editStatusTimer if it exists
      if (editStatusTimer) {
      clearTimeout(editStatusTimer);
      }
      // Set editStatusTimer to clear editStatus after 2 seconds
      const timer = setTimeout(() => {
          setEditStatus("Edit Task");
      }, 2000);
      // Set editStatusTimer
      setEditStatusTimer(timer);

      setTasks(updatedTasks);
      // console.log(tasks);
    } else {
      console.error("Edit task failed:", updatedTasks);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Functions to open and close Modal
function openModal() {
  setIsModalOpen(true);
}

function closeModal() {
  setIsModalOpen(false);
}

// Function to delete task
async function handleDelete() {
  const id = id2;
  try {
    const response = await apiFunction.deleteTask(id);
    if (response) {
      console.log("Task deleted successfully!");
      setEditStatus("Deleted!");
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      console.log(tasks);
      setIsModalOpen(false);
    } else {
      console.error("Delete task failed:", response);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to handle page change
const firstIndex = currentPage * tasksPerPage;
const lastIndex = firstIndex + tasksPerPage;

function handlePageChange(selectedPage) {  
  setCurrentTasks(tasks.slice(firstIndex, lastIndex))
  console.log("currentTasks: ",currentTasks)
  setCurrentPage(selectedPage.selected)
  navigate(`/?page=${selectedPage.selected +1}`)
  console.log("selectedPage: ",selectedPage);
}

// Use effect to update currentTasks and currentPage
useEffect(()=>{
  setCurrentTasks(tasks.slice(firstIndex, lastIndex))
  setCurrentPage(currentPage)
  console.log("current page: ",currentPage);
  console.log("first index: ",firstIndex);
  console.log("last index: ",lastIndex);
},[tasks, firstIndex, lastIndex, currentPage])


  return (
    <div className="testing-app">
    <Modal 
        isModalOpen={isModalOpen} closeModal={closeModal}
        handleDelete={handleDelete} />
    <Routes>
    <Route path="/homepage/*" element={<AuthProvider><Homepage /></AuthProvider>} />
    <Route path="/login/*" element={<AuthProvider><Login /></AuthProvider>}>
      </Route>

      <Route path={`/`} element={
        <PrivateRoute>
          <GetAllTasks 
            tasks={tasks}
            showTasks={showTasks}
            loading={loading}
            saveTaskByID={saveTaskByID}
            openModal={openModal}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            currentTasks={currentTasks} />
        </PrivateRoute>}/>  

      <Route path="/addtask" element={
        <PrivateRoute>
          <CreateTask 
            handlesubmit={handlesubmit}
            status={status}
            currentPage={currentPage+1}/>
        </PrivateRoute>
            }/>
 
      <Route path="/:id" element={
        <PrivateRoute>
          <EditTask
            tasks={tasks}
            taskById={taskById}
            handleEditSubmit={handleEditSubmit}
            editStatus={editStatus}
            currentPage={currentPage+1}/>
        </PrivateRoute>
          }/>

    </Routes>
    </div>
  )  
}

export default App;