import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/">Home</Link>
              <Link to="/Statistics">Statistics</Link>
              <Link to="/Dashboard">Dashboard</Link>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium gap-12">
            <Link to="/">Home</Link>
            <Link to="/Statistics">Statistics</Link>
            <Link to="/Dashboard">Dashboard</Link>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="h-10 w-10 border rounded-3xl text-2xl flex items-center justify-center">
            <IoCartOutline />
          </div>
          <div className="h-10 w-10 border rounded-3xl text-2xl flex items-center justify-center">
            <HiOutlineHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
