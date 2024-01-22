import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-2">
        <h2 className="not-title2">Page not found!</h2>

      <Link to="/">
        <button className="btn btn-primary rounded-1 text-white me-4">
          GO BACK
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
