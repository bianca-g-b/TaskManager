import "./App.css";
import {useState, useEffect} from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tasks")
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed!")
      }
      return response.json()
    })
    .then(data => {
      setTasks(data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div className="testing-app">
    <h1>Tasks List:</h1>
    <ul>
        {tasks.map((task) => (
          <div key={task.id} className="tasks">
          <h5>{task.title}</h5>
           <p>{task.content}</p></div>
        ))}
    </ul>
    </div>
  )  
}

export default App;