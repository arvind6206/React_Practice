import React from "react";
import {useNavigate} from 'react-router-dom'
import Login from "./Login";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    async function submitHandler(e){
      e.preventDefault()
      try {
        const res = await axios.post('http://localhost:3000/api/v1/auth/signup', {
          name, email, password
        })

        console.log(res.data)
        navigate('/')
      } catch (error) {
        console.error(error)
      }
    }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler}
        className="space-y-5">

            <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="accent-fuchsia-600"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-fuchsia-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Signup
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button onClick={() => navigate('/')}
          className="text-fuchsia-600 font-semibold hover:underline">
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default Signup;