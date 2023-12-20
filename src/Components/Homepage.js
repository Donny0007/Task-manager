import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Link to="/TaskForm">
        {" "}
        {/* Link to another page*/}
        <button>Add New Task</button>
      </Link>
    </div>
  );
};

export default Homepage;
