import React from "react";
import { Link, useLocation } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorMessage">
      <h2>404 Not Found</h2>
      <Link to="/">
        <button>[GO HOME]</button>
      </Link>
    </div>
  );
};

export default Error;
