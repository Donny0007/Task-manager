import React from "react";

const TaskDisplay = ({ index, task, status, onDelete }) => {
  return (
    <tr className={status === "Complete" ? "complete" : ""}>
      <td>
        <span>{index + 1}</span>
      </td>
      <td>
        <span>{task}</span>
      </td>
      <td>
        <span>{status}</span>
      </td>
      <td className="d-flex justify-content-center align-items-center">
        <button onClick={onDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskDisplay;
