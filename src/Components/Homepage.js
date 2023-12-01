import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h2>Your Task Manager</h2>
      <Link to="/TaskForm">
        {" "}
        {/* Link to another page*/}
        <button>Add New Task</button>
      </Link>
    </div>
  );
};

export default Homepage;
