import React from "react";
import TaskDisplay from "./TaskDisplay";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      <table className="table table-bordered table-stripped">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskDisplay
              key={index}
              index={index}
              task={task.task}
              status={task.status}
              onDelete={(index) => onDelete(index)}
            />
          ))}{" "}
          {/* Iterate each task and its attributes in a table */}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
