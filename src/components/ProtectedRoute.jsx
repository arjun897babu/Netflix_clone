import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({Children})=>{
  const {user} = UserAuth();
  if(!user){
    return  <Navigate to ='/' />
  }

  return Children
}

export default ProtectedRoute