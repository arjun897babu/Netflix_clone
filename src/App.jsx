import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import Profile from "./pages/Profile"
import NavBar from "./components/NavBar"
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <AuthContextProvider >
        <NavBar />
        <Routes >
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<SignUp />} ></Route>
          <Route path="/profile"
            element={
              <ProtectedRoute >
                <Profile />
              </ProtectedRoute>
            }
          ></Route>

        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
