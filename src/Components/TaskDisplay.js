import React from 'react'

const TaskDisplay = ({task, status, onDelete}) => {
  return (
    <div>
        <span>{task}</span>
        <span>{status}</span>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default TaskDisplay