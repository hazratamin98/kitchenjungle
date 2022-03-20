import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { getAuth, signInWithEmailAndPassword } from "src/firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //  const [error, setError] = useState("");

  const onsubmit = (e) => {
    e.preventDefault()
    console.log(email, password)

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        console.log({ user })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.log({ errorCode, errorMessage })
      })
  }

  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              className="underline cursor-pointer  text-blue-700"
              to="/SignUp"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#">
          <input type="hidden" name="remember" value="true" />
          <div class=" ">
            <div className="space-y-1">
              <span className="text-1xl font-semi-bold ">Email</span>

              <input
                value={email}
                id="email"
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                required
                class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>

            <div class="rounded shadow-sm  space-y-4 ">
              <div className="space-y-1">
                <span className="text-1xl font-semi-bold ">Password</span>

                <input
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  required
                  class="  rounded shadow-md  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div class="text-sm">
              <a
                href="password"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>

          <div>
            {" "}
            <button
              onClick={onsubmit}
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
