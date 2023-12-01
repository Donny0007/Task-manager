// TaskList.js
import React from "react";
import TaskDisplay from "./TaskDisplay";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      {Array.isArray(tasks) &&
        tasks.map((task, index) => (
          <TaskDisplay key={index} task={task.task} status={task.status} onDelete={(index) => onDelete(index)}/>
        ))}
    </div>
  );
};

export default TaskList;
