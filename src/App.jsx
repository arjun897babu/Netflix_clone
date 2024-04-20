import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import Profile from "./pages/Profile"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
      </Routes>
    </>
  )
}

export default App
