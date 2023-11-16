import React from "react";
import error from "../../assets/home/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <img src={error} className="object-cover w-full h-full" alt="" />
      <Link to="/" className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <button className="btn btn-success btn-lg text-white cursor-pointer">
          ⬅️ Go Back
        </button>
      </Link>
    </div>
  );
};

export default Error;
