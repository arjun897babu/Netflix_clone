import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50 ">
      <Link to="/">
        <h1
          className="uppercase text-red-600 font-Nsans-bold   cursor-pointer text-5xl" >
          netflix
        </h1>
      </Link>

      <div>
        <Link to="/login">
          <button className="capitalize pr-4">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="capitalize px-6 py-2 bg-red-600 rounded cursor-pointer">
            signup
          </button>
        </Link>
      </div>
    </div>
  );

}


export default NavBar;