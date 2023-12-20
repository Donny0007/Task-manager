const TaskForm = ({
  task,
  handleAddTask,
  onChange,
  status,
  handleStatusChange,
}) => {
  return (
    <div className="taskForm">
      <input
        className="form-control"
        type="text"
        placeholder="Your Task Here"
        value={task}
        onChange={onChange}
        required
      />
      <input
        id="status"
        type="radio"
        name="status"
        value="Complete"
        checked={status === "Complete"}
        onChange={handleStatusChange}
        required
      />
      Complete
      <input
        id="status"
        type="radio"
        name="status"
        value="Pending"
        checked={status === "Pending"}
        onChange={handleStatusChange}
        required
      />
      Pending
      <button onClick={handleAddTask} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default TaskForm;
