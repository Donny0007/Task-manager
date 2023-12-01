import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./Components/TaskForm";
import Homepage from "./Components/Homepage";
import TaskList from "./Components/TaskList";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; 

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  //add a task
  const addTask = () => {
    if (task.trim() !== "") {
      const updatedTasks = [...tasks, { task, status }];
      setTasks(updatedTasks);
      setTask("");
    } 
  };  
  
/* Save the task status */
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // function to Set the task and the status 
  const handleAddTask = () => {
    if (!status) {
      alert("Status required");
    } else {
      addTask({ task, status });
      setStatus("Pending");
    }
  };

  //function to delete a task 
  const delTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container col-md-4">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/TaskForm"
            element={
              <TaskForm
                task={task}
                handleAddTask={handleAddTask}
                onChange={(e) => setTask(e.target.value)}
                status={status}
                handleStatusChange={handleStatusChange} //function call to add a task
              />
            }
          />
        </Routes>
        <TaskList tasks={tasks} onDelete={delTask} />   {/* function call to delete a task*/}
      </Router>
    </div>
  );
};

export default App;
