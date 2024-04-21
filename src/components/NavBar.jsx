import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50 ">
      <Link to="/">
        <h1
          className="uppercase text-red-600 font-Nsans-bold   cursor-pointer text-5xl" >
          netflix
        </h1>
      </Link>

      {
        user?.email ? (
          <div>
            <Link to="/profile">
              <button className="capitalize pr-4">
                profile
              </button>
            </Link>
              <button onClick={handleLogOut} className="capitalize px-6 py-2 bg-red-600 rounded cursor-pointer">
                log out
              </button>
            
          </div>
        ) :
          (
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
          )
      }


    </div>
  );

}


export default NavBar;