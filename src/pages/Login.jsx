import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Login = () => {
  const [remberLogin, setRememberLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const { user, logIn } = UserAuth()
  const navigate = useNavigate();

  const handleLoginError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        setError(prev => ({ ...prev, email: "The email address is not valid." }));
        break;
      case "auth/wrong-password":
        setError(prev => ({ ...prev, password: "The password is incorrect." }));
        break;
      default:
        setError({ invalid: "Invalid login credentials." });
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    try {
      await logIn(email, password);
      navigate('/');
    }
    catch (error) {
      console.log(error.code)
      if (error.code) {
        handleLoginError(error.code)
      }
    }
  }
  console.log(error)
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="///"
        />

        <div className="bg-black/40 fixed w-full top-0 h-screen" />
        <div
          className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-100 mx-auto bg-black/60 rounded-lg">
            <div className="max-w-[320px] mx-auto py-10">
              <h1 className="text-3xl font-Nsans-bold ">log in</h1>

              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4" >
                {error?.invalid && <p className="text-center"><small className="capitalize text-red-500"> {error.invalid}</small></p>}
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email" name="" id="" placeholder="email" autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} />
                {error?.email && <small className="capitalize text-red-500"> {error.email}</small>}

                <input
                  className="p-3 my-2 bg-gray-700 rounded "
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error?.password && <small className="capitalize text-red-500"> {error.password}</small>}

                <button
                  className="bg-red-600 py-3 my-6 rounded font-Nsans-bold">
                  login
                </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" checked={remberLogin} onChange={(e) => setRememberLogin(!remberLogin)} />
                    Rembember me?
                  </p>
                  <p>need help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    new to netfix ?
                  </span>
                  <Link to='/signup'>sign up</ Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;