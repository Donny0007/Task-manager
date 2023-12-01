const TaskForm = ({ task, handleAddTask, onChange, status, handleStatusChange }) => {

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={onChange}
        required
      />
        <input
          type="radio"
          name="status"
          value="Complete"
          checked={status === "Complete"}
          onChange={handleStatusChange}
          required
        />
        Complete
        <input
          type="radio"
          name="status"
          value="Pending"
          checked= {status === "Pending"}
          onChange={handleStatusChange}
          required
        />
        Pending
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskForm;