import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./Components/TaskForm";
import Homepage from "./Components/Homepage";
import TaskList from "./Components/TaskList";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      const updatedTasks = [...tasks, {task, status}];
      setTasks(updatedTasks);
      setTask("");
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAddTask = () => {
    if(!status){
      alert("Status required")
    }
    else{
    addTask({task, status});
    setStatus("Pending");
  }}

  const delTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
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
              handleStatusChange={handleStatusChange}
            />
          }
        />
      </Routes>
      <TaskList tasks={tasks} onDelete = {delTask}/>
    </Router>
  );
};

export default App;
