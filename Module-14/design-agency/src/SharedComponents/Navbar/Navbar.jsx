import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent w-full text-white fixed z-30 px-[4vw] py-[2vw]">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-black">
          <Link to="/">
            Design<span className="text-[#F55F1D]">AGENCY</span>
          </Link>
        </h2>
      </div>
      <div className="lg:flex justify-between gap-8 text-black hidden text-xl">
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/service">Service</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/">
          <button className="btn btn-outline border border-success text-black hover:bg-success w-20 h-10">
            Login
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-success text-white w-25 h-10">
            Register
          </button>
        </Link>
      </div>
      <div className="dropdown lg:hidden flex text-white">
        <label tabIndex={0}>
          <IoMenu className=" text-black text-2xl"></IoMenu>
        </label>
        <div
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-72 right-4 z-[1] p-5 shadow bg-base-100 rounded-box w-52 space-y-3"
        >
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/service">Service</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/">
            <button className="btn btn-outline w-20 h-10">Login</button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline w-20 h-10">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
